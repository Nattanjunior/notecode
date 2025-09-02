'use client'

import { Editor } from "@monaco-editor/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen w-full bg-url('/Hero-Background-notecode.svg') bg-white">
      <Image src="/NoteCodeLogo.svg"
        alt="Logo"
        width={150}
        height={150}
        className="mt-4 p-4"
      />

      <div className="flex flex-col items-center mt-4 mb-10">
        <h2 className="text-4xl font-semibold text-black mb-3">Create & Share</h2>
        <h1 className="text-[2.5rem] font-bold text-black">Your Code easily</h1>
      </div>


      <div className="flex justify-center items-center bg-white p-10 rounded-3xl shadow-xl shadow-black">
        <Editor
          height={540}
          width={900}
          language="HTML"
          options={{
            minimap: { enabled: true },
            scrollbar: { vertical: 'auto', horizontal: 'hidden' },
          }}
          className="rounded-4xl bg-green-500"
        />
      </div>
    </div>
  );
}
