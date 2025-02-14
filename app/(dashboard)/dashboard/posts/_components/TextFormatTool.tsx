"use client";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  CaseSensitive,
  Code,
  // Image,
  ImagePlus,
  Italic,
  List,
  ListOrdered,
  Paperclip,
  Redo2,
  Undo2,
} from "lucide-react";
import React, { useCallback, useRef } from "react";
import { Editor } from "@tiptap/react";

export default function TextFormatTool({ editor }: { editor: Editor | null }) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Function to prompt for image URL
  const addImage = useCallback(() => {
    const url = window.prompt("Enter image URL");
    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  // Function to trigger file input
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Function to handle file selection and upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && editor) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          editor.chain().focus().setImage({ src: reader.result as string }).run();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="py-2 px-2 max-h-fit w-full text-[#3A3A3A] flex flex-wrap rounded-md border border-accent bg-accent-foreground justify-center">
      <div className="flex items-center gap-4 pr-4 border-r border-accent">
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
        >
          <Undo2 size={20} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
        >
          <Redo2 size={20} />
        </button>
      </div>
      <div className="flex items-center gap-4 px-4 border-r border-accent">
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          className="flex items-center gap-1"
        >
          Normal <CaseSensitive />
        </button>
      </div>
      <div className="flex items-center gap-4 px-4 border-r border-accent">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`${
            editor.isActive("bold")
              ? "border border-accent rounded-md"
              : ""
          } p-1`}
        >
          <Bold size={20} />
        </button>
        {/* <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          className={`${
            editor.isActive("underline")
              ? "border border-accent rounded-md"
              : ""
          } p-1`}
        >
          <Underline size={20} />
        </button> */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`${
            editor.isActive("italic")
              ? "border border-accent rounded-md"
              : ""
          } p-1`}
        >
          <Italic size={20} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={`${
            editor.isActive("code")
              ? "border border-accent rounded-md"
              : ""
          } p-1`}
        >
          <Code size={20} />
        </button>
      </div>
      <div className="flex items-center gap-4 px-4 border-r border-accent">
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={`${
            editor.isActive("setTextAlign")
              ? "border border-accent rounded-md"
              : ""
          } p-1`}
        >
          <AlignLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          // onClick={() => editor.chain().focus().s}
        >
          <AlignCenter size={20} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <AlignRight size={20} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        >
          <AlignJustify size={20} />
        </button>
      </div>
      <div className="flex items-center gap-4 px-4 border-r border-accent">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`${
            editor.isActive("bulletList")
              ? "border border-accent rounded-md"
              : ""
          } p-1`}
        >
          <List size={20} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`${
            editor.isActive("orderedList")
              ? "border border-accent rounded-md"
              : ""
          } p-1`}
        >
          <ListOrdered size={20} />
        </button>
      </div>
      {/* Image Upload Buttons */}
      <div className="flex items-center gap-4 px-4">
        {/* Add Image via URL */}
        <button type="button" onClick={addImage}>
          <ImagePlus />
        </button>

        {/* Upload Image via File */}
        <button type="button" onClick={triggerFileInput}>
          <Paperclip size={20} />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>
    </div>
  );
}