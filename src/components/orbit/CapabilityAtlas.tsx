"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type AtlasField = {
  id: "support" | "secure" | "build" | "create";
  index: string;
  label: string;
  description: string;
  detail: string;
  status: string;
  href: string;
};

type CapabilityAtlasProps = {
  fields: readonly AtlasField[];
};

export function CapabilityAtlas({ fields }: CapabilityAtlasProps) {
  const [activeField, setActiveField] = useState<AtlasField["id"] | null>(null);
  const [pinnedField, setPinnedField] = useState<AtlasField["id"] | null>(null);
  const active = fields.find((field) => field.id === activeField) ?? null;

  function preview(field: AtlasField["id"]) {
    if (!pinnedField) setActiveField(field);
  }

  function clearPreview() {
    if (!pinnedField) setActiveField(null);
  }

  function toggle(field: AtlasField["id"]) {
    const next = pinnedField === field ? null : field;
    setPinnedField(next);
    setActiveField(next);
  }

  return (
    <div
      className="atlas-visual"
      data-active={activeField ?? undefined}
      onMouseLeave={clearPreview}
    >
      <div className="atlas-stage">
        <div className="atlas-coordinate atlas-coordinate--top" aria-hidden="true">
          FIELD / 01
        </div>
        <div className="atlas-coordinate atlas-coordinate--side" aria-hidden="true">
          INTERSECTION
        </div>

        <svg
          className="atlas-orbits"
          viewBox="0 0 720 720"
          role="presentation"
          aria-hidden="true"
        >
          <ellipse className="orbit orbit--support" cx="320" cy="306" rx="248" ry="126" transform="rotate(-24 320 306)" />
          <ellipse className="orbit orbit--secure" cx="390" cy="300" rx="250" ry="130" transform="rotate(31 390 300)" />
          <ellipse className="orbit orbit--build" cx="358" cy="378" rx="250" ry="128" transform="rotate(88 358 378)" />
          <ellipse className="orbit orbit--create" cx="357" cy="380" rx="245" ry="124" transform="rotate(153 357 380)" />
          <circle className="orbit-point orbit-point--one" cx="114" cy="250" r="5" />
          <circle className="orbit-point orbit-point--two" cx="572" cy="213" r="5" />
          <circle className="orbit-point orbit-point--three" cx="532" cy="536" r="5" />
          <circle className="orbit-point orbit-point--four" cx="152" cy="510" r="5" />
          <path className="registration-mark" d="M346 76h24M358 64v24M346 648h24M358 636v24" />
        </svg>

        {fields.map((field) => (
          <div
            aria-hidden="true"
            className={`atlas-wash atlas-wash--${field.id}`}
            key={field.id}
          />
        ))}

        <div className="atlas-portrait">
          <Image
            src="/brand/muhammad-farooque-profile.png"
            alt="Muhammad Farooque"
            width={1254}
            height={1254}
            priority
            sizes="(max-width: 767px) 78vw, (max-width: 1100px) 48vw, 36rem"
          />
        </div>

        <nav className="atlas-nodes" aria-label="Explore Muhammad's capabilities">
          {fields.map((field) => (
            <button
              aria-controls="atlas-field-detail"
              aria-expanded={activeField === field.id}
              className={`atlas-node atlas-node--${field.id}`}
              key={field.id}
              onClick={() => toggle(field.id)}
              onFocus={() => preview(field.id)}
              onMouseEnter={() => preview(field.id)}
              type="button"
            >
              <span className="atlas-node__index">{field.index}</span>
              <span className="atlas-node__label">{field.label}</span>
              <span className="atlas-node__description">{field.description}</span>
            </button>
          ))}
        </nav>

        <div
          aria-live="polite"
          className="atlas-field-detail"
          id="atlas-field-detail"
        >
          {active ? (
            <div className={`atlas-field-detail__content atlas-field-detail__content--${active.id}`}>
              <p className="atlas-field-detail__status">{active.status}</p>
              <h2>{active.label}</h2>
              <p>{active.detail}</p>
              <Link href={active.href}>
                Explore this direction <span aria-hidden="true">↗</span>
              </Link>
            </div>
          ) : (
            <p className="atlas-field-detail__hint">
              Select a field to open it.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
