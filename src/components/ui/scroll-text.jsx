import React from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const generateVariants = (direction) => {
  const axis = direction === 'left' || direction === 'right' ? 'X' : 'Y';
  const value = direction === 'right' || direction === 'down' ? 40 : -40;

  return {
    hidden: {
      filter: 'blur(10px)',
      opacity: 0,
      [`translate${axis}`]: value,
    },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      [`translate${axis}`]: 0,
      transition: {
        duration: 0.45,
        ease: 'easeOut',
      },
    },
  };
};

const defaultViewport = { amount: 0.25, margin: '0px 0px 0px 0px', once: true };

/**
 * Scroll-triggered blur + slide text reveal animation (uilayouts scroll-text style).
 */
export default function TextAnimation({
  as = 'h2',
  text,
  classname = '',
  className = '',
  viewport = defaultViewport,
  variants,
  direction = 'down',
  letterAnime = false,
  lineAnime = false,
}) {
  const baseVariants = variants || generateVariants(direction);
  const modifiedVariants = {
    hidden: baseVariants.hidden,
    visible: {
      ...baseVariants.visible,
    },
  };

  const MotionComponent = motion[as] || motion.h2;

  return (
    <MotionComponent
      whileInView="visible"
      initial="hidden"
      variants={containerVariants}
      viewport={viewport}
      className={cn('inline-block', classname || className)}
    >
      {lineAnime ? (
        <motion.span className="inline-block" variants={modifiedVariants}>
          {text}
        </motion.span>
      ) : (
        <>
          {text.split(' ').map((word, index, arr) => (
            <motion.span
              key={`${word}-${index}`}
              className="inline-block"
              variants={letterAnime === false ? modifiedVariants : {}}
            >
              {letterAnime ? (
                <>
                  {word.split('').map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      className="inline-block"
                      variants={modifiedVariants}
                    >
                      {letter}
                    </motion.span>
                  ))}
                  {index < arr.length - 1 ? '\u00A0' : ''}
                </>
              ) : (
                <>
                  {word}
                  {index < arr.length - 1 ? '\u00A0' : ''}
                </>
              )}
            </motion.span>
          ))}
        </>
      )}
    </MotionComponent>
  );
}
