"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down"
}

export function ScrollAnimation({ children, className = "", direction = "up" }: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
            entry.target.classList.remove("animate-out")
          } else {
            entry.target.classList.remove("animate-in")
            entry.target.classList.add("animate-out")
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const animationClass =
    direction === "up"
      ? "translate-y-20 opacity-0 transition-all duration-1000 ease-out"
      : "translate-y-[-20px] opacity-0 transition-all duration-1000 ease-out"

  return (
    <div
      ref={elementRef}
      className={`${animationClass} ${className}`}
      style={
        {
          "--tw-translate-y": direction === "up" ? "80px" : "-80px",
        } as React.CSSProperties
      }
    >
      <style jsx>{`
        .animate-in {
          transform: translateY(0) !important;
          opacity: 1 !important;
        }
        .animate-out {
          transform: translateY(${direction === "up" ? "80px" : "-80px"}) !important;
          opacity: 0 !important;
        }
      `}</style>
      {children}
    </div>
  )
}
