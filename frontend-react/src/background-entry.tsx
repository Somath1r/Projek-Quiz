import React from 'react';
import { createRoot } from 'react-dom/client';
import { BackgroundBeamsWithCollision } from './components/ui/background-beams-with-collision';
import { BackgroundGradientBorder } from './components/ui/background-gradient';
import { Meteors } from "./components/ui/meteors";
import { Spotlight } from "./components/ui/spotlight";
import './index.css';

const beamMount = document.getElementById(
    'quiz-animated-background'
);

if (beamMount) {
    createRoot(beamMount).render(
        <BackgroundBeamsWithCollision />
    );
}


document
    .querySelectorAll<HTMLElement>(".gradient-card")
    .forEach((card, index) => {
        if (card.querySelector(".gradient-effect-mount")) return;

        const mount = document.createElement("div");
        mount.className = "gradient-effect-mount";
        mount.setAttribute("aria-hidden", "true");

        card.prepend(mount);

        createRoot(mount).render(
            <>
                <BackgroundGradientBorder />

                {index !== 1 && <Meteors number={12} />}
            </>
        );
    });


const navbarMount = document.getElementById(
    'navbar-gradient-mount'
);

if (navbarMount) {
    createRoot(navbarMount).render(
        <BackgroundGradientBorder />
    );
}

const gameSpotlightMount = document.getElementById(
        "character-spotlight-mount"
    );

    if (gameSpotlightMount) {
        createRoot(gameSpotlightMount).render(
            <Spotlight
                className="!top-[-50%] !left-[-30%] !h-[300%] !w-[300%]"
                fill="#c4b5fd"
            />
        );
    }

// Spotlight pada setiap kartu karakter yang dipilih
const characterList = document.getElementById("characterList");

if (characterList) {
    const spotlightRoots = new Map<
        HTMLElement,
        ReturnType<typeof createRoot>
    >();

    const updateCharacterSpotlights = () => {
        const cards =
            characterList.querySelectorAll<HTMLElement>(".character-card");

        cards.forEach((card) => {
            let mount = card.querySelector<HTMLElement>(
                ".character-spotlight-mount"
            );

            if (!mount) {
                mount = document.createElement("div");
                mount.className = "character-spotlight-mount";
                mount.setAttribute("aria-hidden", "true");
                card.prepend(mount);
            }

            let root = spotlightRoots.get(card);

            if (!root) {
                root = createRoot(mount);
                spotlightRoots.set(card, root);
            }

            const isSelected = card.classList.contains("selected");
            const wasSelected = mount.dataset.selected === "true";

            if (isSelected === wasSelected) return;

            mount.dataset.selected = String(isSelected);

            root.render(
                isSelected ? (
                    <Spotlight
                        className="!top-[-45%] !left-[-15%] !h-[300%] lg:!w-[300%]"
                        fill="#c4b5fd"
                    />
                ) : null
            );
        });
    }

    updateCharacterSpotlights();

    const spotlightObserver = new MutationObserver(() => {
        updateCharacterSpotlights();
    });

    spotlightObserver.observe(characterList, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
    });
}