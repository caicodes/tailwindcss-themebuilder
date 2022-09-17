import React from "react";
import Icons from "./Icons";
import { Cog } from "./svg/icons/Heroicons";


// DEFAUL PHONE
export const MockupPhone = () => {
  return (
    <div>
      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">Hi.</div>
        </div>
      </div>
    </div>
  );
};

// PHONE BORDER PRIMARY (all adjustable)
export const MockupPhonePrimary = () => {
  return (
    <div className="mt-20">
      <div className="mockup-phone border-primary">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1 text-primary text-2xl space-y-4 bg-primary-focus/20">
            <div>Let's get it on...</div>
            <Cog />
            <Icons />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 *
 *  WINDOWS
 *
 *
 */

export const MockupWindow = () => {
  return (
    <div>
      <div className="mockup-window border border-primary-focus bg-primary-focus shadow-2xl">
        <div className="flex justify-center px-4 py-16 border-t border-primary bg-primary">
          Hello!
        </div>
      </div>
    </div>
  );
};
export const MockupWindow2 = () => {
  return (
    <div>
      <div className="mockup-window border bg-base-300 border-base-300">
        <div className="flex justify-center px-4 py-16 bg-accent/50">
          Hello!
        </div>
      </div>
    </div>
  );
};

/***
 *
 *  CODE MOCKUPS
 *
 */

export const MockupCode = () => {
  return (
    <div>
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>npm i daisyui</code>
        </pre>
      </div>
    </div>
  );
};

export const MockupCodeMultiline = () => {
  return (
    <div>
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>npm i daisyui</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>installing...</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Done!</code>
        </pre>
      </div>
    </div>
  );
};
export const MockupCodeHighlightLine = () => {
  return (
    <div>
      <div className="mockup-code">
        <pre data-prefix="1">
          <code>npm i daisyui</code>
        </pre>
        <pre data-prefix="2">
          <code>installing...</code>
        </pre>
        <pre data-prefix="3" className="bg-warning text-warning-content">
          <code>Error!</code>
        </pre>
      </div>
    </div>
  );
};

export const MockupCodeLongLine = () => {
  return (
    <div>
      <div className="mockup-code">
        <pre data-prefix="~">
          <code>
            Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro
            quae qui et et dolore ratione.
          </code>
        </pre>
      </div>
    </div>
  );
};
