import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export const CursorSpotlight = () => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    // Track mouse movement
    function handleMouseMove({ clientX, clientY }: MouseEvent) {
        mouseX.set(clientX);
        mouseY.set(clientY);
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // Radial gradient for the spotlight effect
    const background = useMotionTemplate`radial-gradient(
    650px circle at ${mouseX}px ${mouseY}px,
    rgba(14, 165, 233, 0.15),
    transparent 80%
  )`;

    return (
        <motion.div
            className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300"
            style={{ background }}
        />
    );
};
