'use client';

import { useState } from 'react';

interface IContentEditorProps {
  value: string;
  onChange: (value: string) => void;
  height?: number;
}

export default function ContentEditor({ value, onChange, height = 450 }: IContentEditorProps) {
  const [tab, setTab] = useState<'edit' | 'preview'>('edit');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const renderMarkdown = (text: string) => {
    let html = text;

    // Headers
    html = html.replace(
      /^### (.*?)$/gm,
      '<h3 style="font-size: 1.17em; font-weight: bold; margin: 0.5em 0;">$1</h3>',
    );
    html = html.replace(
      /^## (.*?)$/gm,
      '<h2 style="font-size: 1.5em; font-weight: bold; margin: 0.67em 0;">$1</h2>',
    );
    html = html.replace(
      /^# (.*?)$/gm,
      '<h1 style="font-size: 2em; font-weight: bold; margin: 0.67em 0;">$1</h1>',
    );

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong style="font-weight: bold;">$1</strong>');
    html = html.replace(/__(.*?)__/g, '<strong style="font-weight: bold;">$1</strong>');

    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em style="font-style: italic;">$1</em>');
    html = html.replace(/_(.*?)_/g, '<em style="font-style: italic;">$1</em>');

    // Links
    html = html.replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" style="color: #0066cc; text-decoration: underline;">$1</a>',
    );

    // Code
    html = html.replace(
      /`(.*?)`/g,
      '<code style="background: #f4f4f4; padding: 2px 4px; border-radius: 3px; font-family: monospace;">$1</code>',
    );

    // Line breaks
    html = html.replace(/\n/g, '<br />');

    return html;
  };

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex gap-2 mb-3 border-b border-gray-300">
        <button
          type="button"
          onClick={() => setTab('edit')}
          className={`px-4 py-2 font-iranYekan font-semibold transition-all cursor-pointer ${
            tab === 'edit'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          ویرایش
        </button>
        <button
          type="button"
          onClick={() => setTab('preview')}
          className={`px-4 py-2 font-iranYekan font-semibold transition-all cursor-pointer ${
            tab === 'preview'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          پیش‌نمایش
        </button>
      </div>

      {/* Edit Tab */}
      {tab === 'edit' && (
        <div
          className={`flex items-start justify-start pr-4 w-full bg-white rounded-lg transition ring-0
            focus-within:ring-2 focus-within:ring-blue-500
            focus-within:ring-offset-2 focus-within:ring-offset-white
            focus-within:shadow-lg opacity-100 shadow-md shadow-[#EDEFF1]`}
        >
          <div className="relative w-full pr-3 pt-3">
            <textarea
              className="peer font-iranYekan outline-none bg-transparent w-full px-2 py-4 resize-none text-text-description placeholder:text-text-description"
              value={value}
              onChange={handleChange}
              placeholder="محتوای بلاگ را به صورت Markdown بنویسید..."
              style={{ height: `${height}px` }}
            />
          </div>
        </div>
      )}

      {/* Preview Tab */}
      {tab === 'preview' && (
        <div
          className="w-full bg-white rounded-lg shadow-md shadow-[#EDEFF1] px-8 py-5 overflow-auto font-iranYekan"
          style={{ height: `${height}px` }}
          dangerouslySetInnerHTML={{
            __html: renderMarkdown(value) || '<p style="color: #999;">هنوز محتوایی وارد نشده</p>',
          }}
        />
      )}

      {/* Helper Text */}
      <p className="text-gray-500 text-xs mt-3 font-iranYekan ltr">
        **Bold** | *Italic* | # Header | [Link](url) | `Code`
      </p>
    </div>
  );
}
