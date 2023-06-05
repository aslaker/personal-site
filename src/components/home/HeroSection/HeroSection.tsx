import Image from "next/image";
import React from "react";
import { RenderMarkup } from "../../common/RenderMarkup/RenderMarkup";
import { type DocumentRendererProps } from "@keystone-6/document-renderer";

interface Props {
  content: DocumentRendererProps["document"];
}

export const HeroSection: React.FC<Props> = ({ content }) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col gap-20 text-center">
        <div className="avatar">
          <div className="relative w-56 rounded-full">
            <Image fill src="/logo.png" alt="logo" />
          </div>
        </div>
        <div className="prose max-w-md">
          <h1 className="text-5xl font-bold">👋🏻 Hi I&apos;m Adam</h1>
          <span>
            <RenderMarkup document={content} />
          </span>
          <button className="btn-primary btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};
