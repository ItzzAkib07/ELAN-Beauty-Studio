import React from 'react';
import { motion } from 'framer-motion';

// Premium editorial ease curve
export const luxuryEase = [0.22, 1, 0.36, 1];

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  distance = 30,
  scale = 0.95,
  className = '',
  viewportMargin = '-40px',
  once = true,
  ...props
}) {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0 }
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0 }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: scale },
          visible: { opacity: 1, scale: 1 }
        };
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      case 'blur':
        return {
          hidden: { opacity: 0, filter: 'blur(8px)', y: distance * 0.5 },
          visible: { opacity: 1, filter: 'blur(0px)', y: 0 }
        };
      default:
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: luxuryEase
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  staggerChildren = 0.1,
  delayChildren = 0,
  className = '',
  viewportMargin = '-40px',
  once = true,
  ...props
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
        ease: luxuryEase
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  direction = 'up',
  distance = 25,
  scale = 0.96,
  duration = 0.6,
  className = '',
  ...props
}) {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0, transition: { duration, ease: luxuryEase } }
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0, transition: { duration, ease: luxuryEase } }
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0, transition: { duration, ease: luxuryEase } }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0, transition: { duration, ease: luxuryEase } }
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: scale },
          visible: { opacity: 1, scale: 1, transition: { duration, ease: luxuryEase } }
        };
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, ease: luxuryEase } }
        };
      default:
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0, transition: { duration, ease: luxuryEase } }
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({
  src,
  alt,
  className = '',
  imageClassName = '',
  aspect = 'aspect-[4/3]',
  priority = false,
  ...props
}) {
  return (
    <div className={`relative overflow-hidden ${aspect} ${className}`}>
      <motion.div
        initial={{ scale: 1.15, filter: 'blur(4px) brightness(0.9)' }}
        whileInView={{ scale: 1, filter: 'blur(0px) brightness(1)' }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.1, ease: luxuryEase }}
        className="w-full h-full"
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          className={`w-full h-full object-cover select-none ${imageClassName}`}
          {...props}
        />
      </motion.div>
    </div>
  );
}

export function TextReveal({
  text,
  className = '',
  delay = 0,
  stagger = 0.03
}) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay }
    })
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={`inline-block ${className}`}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block whitespace-nowrap mr-[0.25em]">
          <motion.span variants={child} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
