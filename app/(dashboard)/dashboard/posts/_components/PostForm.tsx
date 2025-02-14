'use client';
import FormControl from '@/components/common/FormControl';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import Container from '../../_components/Container';
import { Button } from '@/components/ui/button';
import { ChevronLeftIcon } from 'lucide-react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import Tiptap from './Tiptap';
// import TextFormatTool from './TextFormatTool';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';

export default function PostForm() {
  const {
    control,
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'onChange' });
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [bold, setBold] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  // Cover Image Upload
  // const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  // const [base64Image, setBase64Image] = useState<string | null>(null);
  // const [uploading, setUploading] = useState(false);

  // Convert file to Base64 (so it can be stored in an input field)

  // Convert file to Base64
  const fileToBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle file selection
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const uploadedFile = acceptedFiles[0];

      if (uploadedFile) {
        setPreview(URL.createObjectURL(uploadedFile));

        // Convert to Base64 and store in form
        const base64 = await fileToBase64(uploadedFile);
        setValue('image', base64); // Register image data in React Hook Form
      }
    },
    [setValue],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxSize: 10 * 1024 * 1024, // 10MB limit
  });

  const imageData = watch('image');

  useEffect(() => {
    setIsMounted(true); // Ensure client-side rendering
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit, // Add StarterKit as an extension, not a function call
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
  });

  // Don't render the editor until it's mounted on the client side
  if (!isMounted || !editor) {
    return null;
  }

  const handleBold = (text: string) => {
    setBold(true);
    return <span style={{ fontWeight: bold ? 'bold' : 'normal' }}>{text}</span>;
  };

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    // if (!file) {
    //   alert("Please select an image to upload.");
    //   return;
    // }

    // // Send the base64 image as part of the form data
    // const formData = new FormData(e.currentTarget);

    // try {
    //   setUploading(true);
    //   const response = await fetch("/api/upload", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   if (!response.ok) {
    //     throw new Error("Upload failed");
    //   }

    //   const data = await response.json();
    //   console.log("File uploaded successfully:", data);
    //   alert("File uploaded successfully!");
    // } catch (error) {
    //   console.error("Upload error:", error);
    //   alert("File upload failed. Please try again.");
    // } finally {
    //   setUploading(false);
    // }
  };

  return (
    <Container
      onSubmit={handleSubmit(onSubmit)}
      element="form"
      className="flex flex-col min-h-[80vh] gap-4"
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Button
            type="button"
            variant="outline"
            className="px-3 py-2 text-white rounded-full"
          >
            <ChevronLeftIcon />
          </Button>
          <span>Add Post</span>
        </div>
        <div className="flex gap-4 mt-4">
          <Button
            type="button"
            variant="outline"
            className="px-8 py-2 text-white border border-accent rounded-md"
          >
            Save
          </Button>
          <Button
            type="submit"
            variant="secondary"
            className="px-10 py-2 text-white rounded-md"
            // disabled={uploading}
          >
            Publish
            {/* {uploading ? "Uploading..." : "Publish"} */}
          </Button>
        </div>
      </div>
      <div className="lg:flex flex-row-reverse h-full relative gap-4">
        {/* Right Section: Form Controls */}
        <div className="flex flex-col border w-full min-h-full border-accent p-4 rounded-md gap-4">
          <FormControl
            as="input"
            {...register('title', { required: 'This field is required' })}
            onChange={(e) => setTitle(e.target.value)}
            labelText="Title"
            error={errors.title?.message as string}
            className="bg-transparent border p-2 border-accent"
          />
          <FormControl
            as="input"
            {...register('subtitle', { required: 'This field is required' })}
            onChange={(e) => setSubtitle(e.target.value)}
            labelText="Subtitle"
            error={errors.subtitle?.message as string}
            className="bg-transparent border p-2 border-accent"
          />
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Cover Image</label>
            <div
              {...getRootProps()}
              className={`border border-dashed p-4 rounded-md text-center cursor-pointer ${
                isDragActive ? 'border-blue-500' : 'border-accent'
              }`}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-blue-500">Drop the image here...</p>
              ) : (
                <>
                  {preview ? (
                    <div className="flex justify-center">
                      <Image
                        src={preview}
                        alt="Uploaded Image"
                        width={200}
                        height={150}
                        className="rounded-md"
                      />
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-400">
                        Drag and drop an image, or{' '}
                        <span className="text-blue-500 underline">Browse</span>
                      </p>
                      <p className="text-xs">
                        Minimum 1000px width recommended. Max 10MB.
                      </p>
                    </>
                  )}
                </>
              )}
            </div>

            {/* Hidden input field registered with React Hook Form */}
            <input type="hidden" {...register('image')} />

            {imageData && (
              <p className="text-sm text-gray-500">Image selected!</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormControl
              as="select"
              labelText="Type"
              setValue={setValue}
              error={errors.type?.message as string}
              {...register('type', { required: 'This field is required' })}
              // onChange={(e) => setBlog(e.target.value)}
              className="w-full bg-transparent border p-2 border-accent"
              options={[
                { value: 'blog', label: 'Blog' },
                { value: 'support', label: 'Support' },
              ]}
            />
            <FormControl
              as="select"
              setValue={setValue}
              labelText="Category"
              error={errors.category?.message as string}
              {...register('category', { required: 'This field is required' })}
              className="w-full bg-transparent border p-2 border-accent"
              options={[
                { value: 'news', label: 'News' },
                { value: 'updates', label: 'Updates' },
              ]}
            />
          </div>
        </div>
        {/* Left Section: Title and Subtitle Preview */}
        <div className="flex flex-col min-w-[70%] border border-accent text-gray-300 p-4 rounded-md">
          <h1 className="text-2xl font-bold">
            {title || 'Title appears here'}
          </h1>
          <p className="text-lg text-gray-400 break-words">
            {subtitle || 'Subtitle appears here'}
            {bold ? handleBold(subtitle) : ''}
          </p>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Tiptap
                defaultContent={field.value}
                onChange={({ editor }) => {
                  field.onChange(editor.getHTML());
                }}
              />
            )}
          />
        </div>
      </div>
    </Container>
  );
}
