'use client';

import React, { useState, useEffect } from 'react';
import { PROJECTS, type Project } from '@/lib/projects';

const ADMIN_PASSWORD = 'vinay123';

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  const [newProject, setNewProject] = useState<Project>({
    name: '',
    description: '',
    tech: [],
    github: '',
    live: '',
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoggedIn(!!localStorage.getItem('isAdmin'));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('isAdmin', 'true');
      setIsLoggedIn(true);
    } else {
      alert('Incorrect password!');
    }
  };

  const updateProject = (index: number, field: keyof Project, value: any) => {
    const updatedProjects = [...projects];
    if (field === 'tech') {
      updatedProjects[index][field] = value.split(',').map((s: string) => s.trim()).filter(Boolean);
    } else {
      updatedProjects[index][field] = value;
    }
    setProjects(updatedProjects);
  };

  const addNewProject = () => {
    if (newProject.name) {
      setProjects([...projects, newProject]);
      setNewProject({
        name: '',
        description: '',
        tech: [],
        github: '',
        live: '',
      });
    }
  };

  const deleteProject = (index: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter((_, i) => i !== index));
    }
  };

  const exportProjects = () => {
    const typeDef = `export type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
};

`;
    const projectsStr = `export const PROJECTS: Project[] = [
${projects.map(p => `  {
    name: "${p.name.replace(/"/g, '\\"')}",
    description: "${p.description.replace(/"/g, '\\"')}",
    tech: [${p.tech.map(t => `"${t.replace(/"/g, '\\"')}"`).join(', ')}],
    github: "${p.github.replace(/"/g, '\\"')}",${p.live ? `\n    live: "${p.live.replace(/"/g, '\\"')}",` : ''}
  }`).join(',\n')}
];`;
    const fullCode = typeDef + projectsStr;

    const blob = new Blob([fullCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'projects.ts';
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-neo-white neo-grid-bg dark:bg-neo-dark-bg flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-neo-white border-4 border-neo-black p-8 shadow-neo-lg dark:border-neo-white dark:bg-neo-dark-card">
          <h1 className="text-3xl font-black text-center text-neo-black dark:text-neo-white mb-2">Admin Access</h1>
          <p className="text-center text-neo-black dark:text-neo-white mb-8 font-bold">Enter password to access admin panel</p>
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 border-4 border-neo-black bg-neo-white text-neo-black outline-none focus:bg-neo-yellow font-bold text-lg dark:border-neo-white dark:bg-neo-dark-card dark:text-neo-white dark:focus:bg-neo-blue dark:focus:text-neo-black"
            />
            <button
              type="submit"
              className="neo-btn w-full bg-neo-yellow border-4 border-neo-black px-6 py-4 font-black text-neo-black shadow-neo-sm dark:border-neo-white"
            >
              Unlock Admin Panel
            </button>
          </form>
          <p className="text-center text-xs text-neo-black dark:text-neo-white mt-6 font-bold">
            Password is saved in your browser after first login
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neo-white neo-grid-bg dark:bg-neo-dark-bg p-6 sm:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-10">
          <div>
            <h1 className="text-4xl font-black text-neo-black dark:text-neo-white">Admin Panel</h1>
            <p className="text-neo-black dark:text-neo-white mt-2 font-bold">Edit your projects and export for your website</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                localStorage.removeItem('isAdmin');
                setIsLoggedIn(false);
              }}
              className="neo-btn bg-neo-pink border-4 border-neo-black px-6 py-4 font-black text-neo-black shadow-neo-sm dark:border-neo-white"
            >
              Logout
            </button>
            <button
              onClick={exportProjects}
              className="neo-btn bg-neo-green border-4 border-neo-black px-6 py-4 font-black text-neo-black shadow-neo-sm dark:border-neo-white"
            >
              📥 Export projects.ts
            </button>
          </div>
        </div>

        <div className="grid gap-12">
          <section className="bg-neo-white border-4 border-neo-black p-6 shadow-neo-md dark:border-neo-white dark:bg-neo-dark-card">
            <h2 className="text-xl font-black text-neo-black dark:text-neo-white mb-4">➕ Add New Project</h2>
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Project name"
                value={newProject.name}
                onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                className="w-full px-5 py-4 border-4 border-neo-black bg-neo-white text-neo-black outline-none focus:bg-neo-yellow font-bold dark:border-neo-white dark:bg-neo-dark-card dark:text-neo-white"
              />
              <textarea
                placeholder="Description"
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                className="w-full px-5 py-4 border-4 border-neo-black bg-neo-white text-neo-black outline-none focus:bg-neo-yellow font-bold resize-none h-24 dark:border-neo-white dark:bg-neo-dark-card dark:text-neo-white"
              />
              <input
                type="text"
                placeholder="Tech stack (comma-separated: Flutter, Dart, Firebase)"
                value={newProject.tech.join(', ')}
                onChange={(e) => setNewProject({
                  ...newProject,
                  tech: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                })}
                className="w-full px-5 py-4 border-4 border-neo-black bg-neo-white text-neo-black outline-none focus:bg-neo-yellow font-bold dark:border-neo-white dark:bg-neo-dark-card dark:text-neo-white"
              />
              <input
                type="text"
                placeholder="GitHub URL"
                value={newProject.github}
                onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
                className="w-full px-5 py-4 border-4 border-neo-black bg-neo-white text-neo-black outline-none focus:bg-neo-yellow font-bold dark:border-neo-white dark:bg-neo-dark-card dark:text-neo-white"
              />
              <input
                type="text"
                placeholder="Live demo URL (optional)"
                value={newProject.live}
                onChange={(e) => setNewProject({ ...newProject, live: e.target.value })}
                className="w-full px-5 py-4 border-4 border-neo-black bg-neo-white text-neo-black outline-none focus:bg-neo-yellow font-bold dark:border-neo-white dark:bg-neo-dark-card dark:text-neo-white"
              />
              <button
                onClick={addNewProject}
                className="neo-btn bg-neo-blue border-4 border-neo-black px-6 py-4 font-black text-neo-black shadow-neo-sm dark:border-neo-white"
              >
                Add Project
              </button>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-neo-black dark:text-neo-white mb-6">📝 Edit Projects</h2>
            <div className="grid gap-6">
              {projects.map((project, index) => {
                const colors = ["bg-neo-yellow", "bg-neo-blue", "bg-neo-pink", "bg-neo-green", "bg-neo-purple", "bg-neo-orange"];
                return (
                  <div
                    key={index}
                    className="bg-neo-white border-4 border-neo-black p-6 shadow-neo-md dark:border-neo-white dark:bg-neo-dark-card"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-start mb-4">
                      <h3 className="text-lg font-black text-neo-black dark:text-neo-white">
                        <span className={`inline-block border-3 border-neo-black ${colors[index % colors.length]} px-3 py-1 mr-2 dark:border-neo-white`}>
                          #{index + 1}
                        </span>
                        {project.name}
                      </h3>
                      <button
                        onClick={() => deleteProject(index)}
                        className="neo-btn bg-neo-pink border-3 border-neo-black px-4 py-2 font-black text-neo-black shadow-neo-sm dark:border-neo-white"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                    <div className="grid gap-3">
                      <input
                        type="text"
                        placeholder="Project name"
                        value={project.name}
                        onChange={(e) => updateProject(index, 'name', e.target.value)}
                        className="w-full px-4 py-3 border-3 border-neo-black bg-neo-white text-neo-black outline-none focus:bg-neo-yellow font-bold dark:border-neo-white dark:bg-neo-dark-card dark:text-neo-white"
                      />
                      <textarea
                        placeholder="Description"
                        value={project.description}
                        onChange={(e) => updateProject(index, 'description', e.target.value)}
                        className="w-full px-4 py-3 border-3 border-neo-black bg-neo-white text-neo-black outline-none focus:bg-neo-yellow font-bold resize-none h-20 dark:border-neo-white dark:bg-neo-dark-card dark:text-neo-white"
                      />
                      <input
                        type="text"
                        placeholder="Tech stack (comma-separated)"
                        value={project.tech.join(', ')}
                        onChange={(e) => updateProject(index, 'tech', e.target.value)}
                        className="w-full px-4 py-3 border-3 border-neo-black bg-neo-white text-neo-black outline-none focus:bg-neo-yellow font-bold dark:border-neo-white dark:bg-neo-dark-card dark:text-neo-white"
                      />
                      <div className="grid gap-3 sm:grid-cols-2">
                        <input
                          type="text"
                          placeholder="GitHub URL"
                          value={project.github}
                          onChange={(e) => updateProject(index, 'github', e.target.value)}
                          className="w-full px-4 py-3 border-3 border-neo-black bg-neo-white text-neo-black outline-none focus:bg-neo-yellow font-bold dark:border-neo-white dark:bg-neo-dark-card dark:text-neo-white"
                        />
                        <input
                          type="text"
                          placeholder="Live demo URL (optional)"
                          value={project.live}
                          onChange={(e) => updateProject(index, 'live', e.target.value)}
                          className="w-full px-4 py-3 border-3 border-neo-black bg-neo-white text-neo-black outline-none focus:bg-neo-yellow font-bold dark:border-neo-white dark:bg-neo-dark-card dark:text-neo-white"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <div className="mt-12 p-6 bg-neo-yellow border-4 border-neo-black shadow-neo-md">
          <h3 className="font-black text-neo-black mb-2 text-lg">💡 How it works</h3>
          <ol className="list-decimal ml-5 text-neo-black space-y-2 font-bold">
            <li>Add, edit, or delete projects in the form above</li>
            <li>Click <strong>&quot;📥 Export projects.ts&quot;</strong> to download the updated file</li>
            <li>Replace the <code className="bg-neo-white border-2 border-neo-black px-2 py-1">lib/projects.ts</code> file in your project with the new one</li>
            <li>Commit and push to GitHub</li>
            <li>Vercel will automatically redeploy your website!</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
