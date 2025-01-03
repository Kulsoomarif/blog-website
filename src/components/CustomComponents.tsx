
import React from 'react';
import { PortableTextComponents } from "@portabletext/react";
import {urlFor} from "@/sanity/lib/image";
import  Image from "next/image";

const CustomComponents: PortableTextComponents = {
  
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-blue-600">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-blue-600">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-blue-600">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold text-blue-600">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-base text-gray-700 dark:text-gray-300">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-600 pl-4 italic">
        {children}
      </blockquote>
    ),
  
    unknown: ({ children }) => <div className="text-red-500">{children}</div>,
  },

  
  listItem: {
    bullet: ({ children }) => (
      <li className="list-disc marker:text-yellow-600 list-inside ml-4">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="list-decimal list-inside ml-4">{children}</li>
    ),
  },

  
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-black dark:text-white">
        {children}
      </strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => (
      <span className="underline">{children}</span>
    ),
    code: ({ children }) => (
      <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const { href } = value;
      return (
        <a
          href={href}
          className="text-blue-500 underline hover:text-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value).url()}
        alt={value.alt || "image"}
        className="my-4 rounded"
      />
    ),
    code: ({ value }) => (
      <pre className="bg-gray-800 text-white p-4 rounded">
        <code>{value.code}</code>
      </pre>
    ),
  },
};

export default CustomComponents;