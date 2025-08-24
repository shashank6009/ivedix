'use client';

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

function CardRotate({ children, onSendToBack, sensitivity }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

interface CardData {
  id: number;
  name: string;
  img: string;
  description: string;
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [] as CardData[],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  onCardChange = () => {}
}) {
  const [cards, setCards] = useState(cardsData);

  const sendToBack = (id) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
    // Update the active card index when a card is moved to back
    const newIndex = cards.findIndex((card) => card.id === id);
    onCardChange(newIndex);
  };

  return (
    <div
      className="stack-container"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height + 60, // Extra height for names
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation
          ? Math.random() * 10 - 5
          : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="card"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: 0,
                scale: 1 - (index * 0.02),
                transformOrigin: "center",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
            >
              <img
                src={card.img}
                alt={`card-${card.id}`}
                className="card-image"
              />
              <div className="card-name">{card.name}</div>
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
