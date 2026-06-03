'use client';

import React, { useState, useEffect } from 'react';
import { PROJECTS, type Project } from '@/lib/projects';

export default function AdminPage() {
  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newProject, setNewProject] = useState<Project>({
    name: '',
    description: '',
    tech: [],
    github: '',
    live: '',
  });

  const updateProject = (index: number, field: keyof Project, value: any) => {
    const updatedProjects = [...projects];
    if (field === 'tech') {
      // Convert comma-separated string to array
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
    // Generate code string
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

    // Download as file
    const blob = new Blob([fullCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'projects.ts';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0f0f14] p-6 sm:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50">Admin Panel</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Edit your projects and export for your website</p>
          </div>
          <button
            onClick={exportProjects}
            className="bg-accent-blue text-slate-950 px-6 py-3 rounded-full font-bold hover:bg-sky-400 transition"
          >
            📥 Export projects.ts
          </button>
        </div>

        <div className="grid gap-10">
          {/* Add New Project */}
          <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">➕ Add New Project</h2>
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Project name"
                value={newProject.name}
                onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 outline-none focus:border-accent-blue"
              />
              <textarea
                placeholder="Description"
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 outline-none focus:border-accent-blue resize-none h-24"
              />
              <input
                type="text"
                placeholder="Tech stack (comma-separated: Flutter, Dart, Firebase)"
                value={newProject.tech.join(', ')}
                onChange={(e) => setNewProject({ 
                  ...newProject, 
                  tech: e.target.value.split(',').map(s => s.trim()).filter(Boolean) 
                })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 outline-none focus:border-accent-blue"
              />
              <input
                type="text"
                placeholder="GitHub URL"
                value={newProject.github}
                onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 outline-none focus:border-accent-blue"
              />
              <input
                type="text"
                placeholder="Live demo URL (optional)"
                value={newProject.live}
                onChange={(e) => setNewProject({ ...newProject, live: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 outline-none focus:border-accent-blue"
              />
              <button
                onClick={addNewProject}
                className="bg-slate-900 dark:bg-accent-blue text-white dark:text-slate-950 px-6 py-3 rounded-xl font-bold hover:opacity-90 transition"
              >
                Add Project
              </button>
            </div>
          </section>

          {/* Edit Existing Projects */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-6">📝 Edit Projects</h2>
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">#{index + 1} - {project.name}</h3>
                    <button
                      onClick={() => deleteProject(index)}
                      className="text-red-500 hover:text-red-600 font-medium"
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
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-50 outline-none focus:border-accent-blue"
                    />
                    <textarea
                      placeholder="Description"
                      value={project.description}
                      onChange={(e) => updateProject(index, 'description', e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-50 outline-none focus:border-accent-blue resize-none h-20"
                    />
                    <input
                      type="text"
                      placeholder="Tech stack (comma-separated)"
                      value={project.tech.join(', ')}
                      onChange={(e) => updateProject(index, 'tech', e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-50 outline-none focus:border-accent-blue"
                    />
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input
                        type="text"
                        placeholder="GitHub URL"
                        value={project.github}
                        onChange={(e) => updateProject(index, 'github', e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-50 outline-none focus:border-accent-blue"
                      />
                      <input
                        type="text"
                        placeholder="Live demo URL (optional)"
                        value={project.live}
                        onChange={(e) => updateProject(index, 'live', e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-50 outline-none focus:border-accent-blue"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-12 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl border border-yellow-200 dark:border-yellow-800">
          <h3 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">💡 How it works</h3>
          <ol className="list-decimal ml-5 text-yellow-800 dark:text-yellow-300 space-y-2">
            <li>Add, edit, or delete projects in the form above</li>
            <li>Click <strong>"📥 Export projects.ts"</strong> to download the updated file</li>
            <li>Replace the <code className="bg-yellow-100 dark:bg-yellow-900/50 px-2 py-1 rounded">lib/projects.ts</code> file in your project with the new one</li>
            <li>Commit and push to GitHub</li>
            <li>Vercel will automatically redeploy your website!</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
