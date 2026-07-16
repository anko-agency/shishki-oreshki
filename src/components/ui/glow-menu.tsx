"use client"

import * as React from "react"
import { motion, type Transition, type Variants, type HTMLMotionProps } from "framer-motion"
import { cn } from "../../lib/utils"
import type { LucideIcon } from "lucide-react"

export interface MenuItem {
  icon: LucideIcon | React.FC<any>
  label: string
  href: string
  gradient: string
  iconColor: string
  color?: string
}

interface MenuBarProps extends Omit<HTMLMotionProps<"nav">, "children"> {
  items: MenuItem[]
  activeItem?: string
  onItemClick?: (label: string) => void
}

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring" as const, stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants: Variants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const sharedTransition: Transition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

const listVariants: Variants = {
  initial: { x: 0 },
  hover: { 
    x: "-35%", 
    transition: { 
      type: "spring" as const,
      stiffness: 60,
      damping: 18
    } 
  }
}

export const MenuBar = React.forwardRef<HTMLElement, MenuBarProps>(
  ({ className, items, activeItem, onItemClick, ...props }, ref) => {
    // Hardcoded to dark theme for this project
    const isDarkTheme = true

    return (
      <motion.nav
        ref={ref}
        className={cn(
          "p-1.5 rounded-full bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg border border-border/40 shadow-lg relative overflow-hidden",
          className,
        )}
        initial="initial"
        whileHover="hover"
        {...props}
      >
        <motion.div
          className={`absolute -inset-2 bg-gradient-radial from-transparent ${
            isDarkTheme
              ? "via-blue-400/30 via-30% via-purple-400/30 via-60% via-red-400/30 via-90%"
              : "via-blue-400/20 via-30% via-purple-400/20 via-60% via-red-400/20 via-90%"
          } to-transparent rounded-full z-0 pointer-events-none`}
          variants={navGlowVariants}
        />
        <motion.ul 
          className="flex items-center gap-2 relative z-10 w-full overflow-x-auto no-scrollbar py-0.5 px-1"
          variants={listVariants}
        >
          {items.map((item) => {
            const Icon = item.icon
            const isActive = item.label === activeItem

            return (
              <motion.li key={item.label} className="relative flex-shrink-0">
                <button
                  onClick={() => onItemClick?.(item.label)}
                  className="block w-full"
                >
                  <motion.div
                    className="block rounded-full overflow-visible group relative"
                    style={{ perspective: "600px" }}
                    whileHover="hover"
                    initial={isActive ? "hover" : "initial"}
                    animate={isActive ? "hover" : "initial"}
                  >
                    <motion.div
                      className="absolute inset-0 z-0 pointer-events-none"
                      variants={glowVariants}
                      animate={isActive ? "hover" : "initial"}
                      style={{
                        background: item.gradient,
                        opacity: isActive ? 1 : 0,
                        borderRadius: "9999px",
                      }}
                    />
                    <motion.div
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 relative z-10 bg-transparent transition-colors rounded-full whitespace-nowrap",
                        isActive
                          ? ""
                          : "text-white/60 group-hover:text-white/90",
                      )}
                      variants={itemVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center bottom",
                        color: isActive ? (item.color || 'white') : undefined
                      }}
                    >
                      <span
                        className={cn(
                          "transition-colors duration-300 flex items-center justify-center",
                          isActive ? item.iconColor : "text-white",
                        )}
                      >
                        <Icon className="h-6 w-6 object-contain drop-shadow-md" />
                      </span>
                      <span className="text-[11px] font-black uppercase tracking-widest leading-[1.2]">{item.label}</span>
                    </motion.div>
                    <motion.div
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-transparent transition-colors rounded-full whitespace-nowrap",
                        isActive
                          ? "font-black"
                          : "text-white/60 group-hover:text-white",
                      )}
                      variants={backVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center top",
                        rotateX: 90,
                        color: isActive ? (item.color || 'white') : undefined
                      }}
                    >
                      <span
                        className={cn(
                          "transition-colors duration-300 flex items-center justify-center",
                          isActive ? item.iconColor : "text-white",
                        )}
                      >
                        <Icon className="h-6 w-6 object-contain drop-shadow-md" />
                      </span>
                      <span className="text-[11px] font-black uppercase tracking-widest leading-[1.2]">{item.label}</span>
                    </motion.div>
                  </motion.div>
                </button>
              </motion.li>
            )
          })}
        </motion.ul>
      </motion.nav>
    )
  },
)

MenuBar.displayName = "MenuBar"
