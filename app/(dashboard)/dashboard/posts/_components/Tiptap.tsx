import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { Transaction } from "prosemirror-state"; // ✅ Ensure correct import
import TextAlign from "@tiptap/extension-text-align";
import TextFormatTool from "./TextFormatTool";
// import BulletList from "@tiptap/extension-bullet-list";
// import OrderedList from "@tiptap/extension-ordered-list";
// import ListItem from "@tiptap/extension-list-item";

interface TiptapProps {
  defaultContent?: string;
  onChange: (props: { editor: Editor; transaction?: Transaction }) => void;
  error?: string;
}

export default function Tiptap({ defaultContent = "", onChange }: TiptapProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: "max-h-auto w-full",
        },
      }),
      
      TextAlign.configure({
        types: ["heading", "paragraph"], // Apply alignment to these types
      }),
    ],
    content: defaultContent,
    onUpdate({ editor, transaction }) {
      onChange({ editor, transaction });
    },
    onBlur({ editor }) {
      onChange({ editor }); // ✅ Ensures transaction is optional
    },
    editorProps: {
      attributes: {
        class:
          "p-2 rounded-lg cursor-text text-sm text-main-900 font-medium transition-colors outline-none min-h-[20rem]  sm:w-[600px] xl:w-[750px] textEditor",
      },
    },
  });

  return editor ? (
    <div className="grid gap-2 border border-accent rounded-md mt-5 text-wrap break-words whitespace-pre-wrap word-wrap break-word">
      <EditorContent editor={editor} />
      <TextFormatTool editor={editor} />
    </div>
  ) : null;
}
