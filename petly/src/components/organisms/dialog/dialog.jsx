"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dialog_btn from "../../../../public/btn/dialog_btn.png";
import "./dialog.css";
import { usePetStore } from "@/ctx/store";
import { AnimationState } from "@/helper/type";

const Dialog = () => {
  const animationState = usePetStore((state) => state.animationState);
  const [words, setWords] = useState([]);
  const typingRef = useRef(null);
  const typingIntervalRef = useRef(null); 

  const type_delay = 75;
  const word_stay = 2000;
  const forward = 0;
  const backward = 1;

  const animationWords = {
    [AnimationState.REGULAR]: ["I’m happy, please play with me..."],
    [AnimationState.ANIMATION_WITH_GIFT]: ["Thanks for the gift! I love it!"],
    [AnimationState.ANIMATION_WITH_MUSIC]: ["This music makes me so happy!"],
    [AnimationState.ANIMATION_WITH_GAME]: [
      "Let’s play together! It’s so much fun!",
    ],
    [AnimationState.ANIMATION_WITH_COOKIE]: [
      "Yummy! That cookie is delicious!",
    ],
    [AnimationState.ANIMATION_WITH_PIE]: [
      "I love pie! It’s my favorite treat!",
    ],
    [AnimationState.ANIMATION_WITH_CHICKEN]: ["Chicken time! That’s so tasty!"],
    [AnimationState.ANIMATION_WITH_DUMBELL]: [
      "I feel stronger already! Let’s work out more!",
    ],
    [AnimationState.ANIMATION_WITH_FOOTBALL]: [
      "Playing football is so exciting!",
    ],
    [AnimationState.ANIMATION_WITH_TENNIS]: ["Tennis match! I love the game!"],
  };

  useEffect(() => {
    setWords(animationWords[animationState] || ["What should we do next?"]);
  }, [animationState]);

  useEffect(() => {
    const text = typingRef.current;

    const initializeTypingEffect = (element, wordsArray) => {
      if (!wordsArray || wordsArray.length === 0) return;

      let direction = forward;
      let wordIndex = 0;
      let letterIndex = 0;

      const startTyping = () => {
        if (typingIntervalRef.current) {
          clearInterval(typingIntervalRef.current);
        }

        typingIntervalRef.current = setInterval(typeLetter, type_delay);
      };

      const typeLetter = () => {
        const word = wordsArray[wordIndex];

        if (direction === forward) {
          letterIndex++;

          if (letterIndex === word.length) {
            direction = backward;
            clearInterval(typingIntervalRef.current);
            setTimeout(startTyping, word_stay);
          }
        } else if (direction === backward) {
          letterIndex--;

          if (letterIndex === 0) {
            moveToNextWord();
          }
        }

        const textToType = word.substring(0, letterIndex);
        element.textContent = textToType;
      };

      const moveToNextWord = () => {
        letterIndex = 0;
        direction = forward;
        wordIndex++;

        if (wordIndex === wordsArray.length) {
          wordIndex = 0;
        }
      };

      startTyping();
    };

    initializeTypingEffect(text, words);

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, [words]);

  return (
    <section id="dialog">
      <div className="dialog-outer">
        <div className="dialog-inner">
          <p className="dialog-text" ref={typingRef}></p>
          <Image src={dialog_btn} alt="" className="dialog-btn" priority />
        </div>
      </div>
    </section>
  );
};

export default Dialog;
