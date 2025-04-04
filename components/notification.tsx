"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NotificationProps {
  title: string
  description?: string
  variant?: "default" | "destructive"
  duration?: number
  onClose?: () => void
}

export function Notification({ title, description, variant = "default", duration = 5000, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Small delay to trigger the animation
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 50)

    const hideTimer = setTimeout(() => {
      setIsVisible(false)
      // Wait for animation to complete before unmounting
      setTimeout(() => {
        if (onClose) onClose()
      }, 300)
    }, duration)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [duration, onClose])

  if (!isMounted) return null

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 max-w-md rounded-lg p-4 shadow-lg border transform transition-all duration-300 ease-in-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        variant === "destructive"
          ? "bg-destructive text-destructive-foreground border-destructive/50"
          : "bg-background border-neutral-200 dark:border-neutral-800",
      )}
    >
      <div className="flex justify-between items-start gap-2">
        <div>
          <h3 className="font-medium">{title}</h3>
          {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6"
          onClick={() => {
            setIsVisible(false)
            // Wait for animation to complete before unmounting
            setTimeout(() => {
              if (onClose) onClose()
            }, 300)
          }}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
    </div>
  )
}

export function useNotification() {
  const [notifications, setNotifications] = useState<NotificationProps[]>([])

  const showNotification = (props: NotificationProps) => {
    setNotifications((prev) => [...prev, props])
  }

  const closeNotification = (index: number) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index))
  }

  const NotificationContainer = () => (
    <>
      {notifications.map((props, index) => (
        <Notification key={index} {...props} onClose={() => closeNotification(index)} />
      ))}
    </>
  )

  return {
    showNotification,
    NotificationContainer,
  }
}

