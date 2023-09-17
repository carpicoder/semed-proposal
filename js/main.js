const isMobile = window.innerWidth <= 750; 


const startWithOpacity = (element, opacity) => {
    gsap.from(element, {
        opacity: opacity,
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
        }
    })
}

const startWithOpacityAll = (element, opacity) => {
    const elements = document.querySelectorAll(element);
    
    elements.forEach(el => {
        gsap.from(el, {
            opacity: opacity,
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                end: "top 50%",
                scrub: true,
            }
        })
    })
}

if (!isMobile) {
    let st = ScrollTrigger.create({
        trigger: ".hero",
        pin: ".hero-inner-left",
        start: "top top",
        end: "bottom bottom"
    });
    
}
gsap.to(".hero", {
    backgroundColor: "#1c1c1c",
    scrollTrigger: {
        trigger: ".funnel",
        start: "top 50%",
        onEnter: () => {
            gsap.to(".hero", {
                backgroundColor: "#1c1c1c",
                // Otras propiedades CSS que quieras cambiar
            });
            gsap.to(".funnel", {
                backgroundColor: "#1c1c1c",
                // Otras propiedades CSS que quieras cambiar
            });
        },
        onLeaveBack: () => {
            gsap.to(".hero", {
                backgroundColor: "#009246",
                // Otras propiedades CSS que quieras cambiar
            });
            gsap.to(".funnel", {
                backgroundColor: "#009246",
                // Otras propiedades CSS que quieras cambiar
            });
        },
    },
});


startWithOpacityAll(".hero-paragraph", .1);
startWithOpacityAll(".section-title", .1);

gsap.from(".funnel-image-1", {
    scaleY: 0,
    opacity: 0,
    filter: "grayscale(1)",
    scrollTrigger: {
        trigger: ".funnel-container",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
    }
})

gsap.from(".funnel-image-2", {
    scaleX: 0,
    opacity: 0,
    filter: "grayscale(1)",
    scrollTrigger: {
        trigger: ".funnel-image-2",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
    }
})

startWithOpacityAll(".stage-title", .1);

const stageTexts = document.querySelectorAll(".stage-text");

stageTexts.forEach((stageText, index) => {
    gsap.from(stageText, {
        opacity: 0,
        delay: (.5 * index) + .5,
        scrollTrigger: {
            trigger: stageText.parentNode.parentNode,
            start: "top 100%",
            end: "top 50%",
            toggleActions: "play none none reset"
        }
    })
})

gsap.to(".funnel", {
    backgroundColor: "#009246",
    scrollTrigger: {
        trigger: ".awareness",
        start: "top 80%",
        onEnter: () => {
            gsap.to(".funnel", {
                backgroundColor: "#009246",
                // Otras propiedades CSS que quieras cambiar
            });
            gsap.to(".hero", {
                backgroundColor: "#009246",
                // Otras propiedades CSS que quieras cambiar
            });
            gsap.to(".awareness", {
                backgroundColor: "#009246",
                // Otras propiedades CSS que quieras cambiar
            });
        },
        onLeaveBack: () => {
            gsap.to(".funnel", {
                backgroundColor: "#1c1c1c",
                // Otras propiedades CSS que quieras cambiar
            });
            gsap.to(".hero", {
                backgroundColor: "#1c1c1c",
                // Otras propiedades CSS que quieras cambiar
            });
            gsap.to(".awareness", {
                backgroundColor: "#1c1c1c",
                // Otras propiedades CSS que quieras cambiar
            });
        },
    },
});


const sectionTitleStages = document.querySelectorAll(".section-title-stage");
    
sectionTitleStages.forEach(sectionTitleStage => {
    gsap.fromTo(sectionTitleStage, {
        opacity: .1,
    }, {
        opacity: 1,
        scrollTrigger: {
            trigger: sectionTitleStage,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
        }
    })
    // gsap.to(sectionTitleStage, {
    //     position: "sticky",
    //     top: "1rem",
    //     width: "max-content",
    //     borderRadius: "0.5rem",
    //     fontSize: "1rem",
    //     padding: "0.25rem 2rem",
    //     backgroundColor: "#009246",
    //     border: "1px solid #ececec",
    //     scrollTrigger: {
    //         trigger: sectionTitleStage,
    //         start: "top top",
    //         scrub: true,
    //     }
    // })
})



// let sections = gsap.utils.toArray(".panel");

// let scrollTween = gsap.to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     ease: "none", 
//     scrollTrigger: {
//       trigger: ".panel-flex",
//       pin: true,
//       scrub: 1,
//       //snap: directionalSnap(1 / (sections.length - 1)),
//       end: "+=3000"
//     }
// });





let panelContainers = document.querySelectorAll(".panel-container");

panelContainers.forEach(panelContainer => {

    let scrollTween = gsap.to(panelContainer.firstElementChild.lastElementChild.children, {
        xPercent: -120 * (panelContainer.firstElementChild.lastElementChild.children.length - 1),
        ease: "none", 
        scrollTrigger: {
            trigger: panelContainer.firstElementChild,
            pin: true,
            scrub: 1,
            //snap: directionalSnap(1 / (sections.length - 1)),
            end: "+=3000",
        
        }
    });




})

gsap.to(".interest", {
    backgroundColor: "#1c1c1c",
    scrollTrigger: {
        start: "top 50%",
        end: "top 50%",
        trigger: ".interest",
        onEnter: () => {
            gsap.to(".interest", {
                backgroundColor: "#1c1c1c",
                // Otras propiedades CSS que quieras cambiar
            });
            gsap.to(".awareness", {
                backgroundColor: "#1c1c1c",
                // Otras propiedades CSS que quieras cambiar
            });
        },
        onLeaveBack: () => {
            gsap.to(".interest", {
                backgroundColor: "#009246",
                // Otras propiedades CSS que quieras cambiar
            });
            gsap.to(".awareness", {
                backgroundColor: "#009246",
                // Otras propiedades CSS que quieras cambiar
            });
        },
    }
});

gsap.to(".consideration", {
    backgroundColor: "#ececec",
    color: "#1c1c1c",
    scrollTrigger: {
        start: "top 50%",
        end: "top 50%",
        trigger: ".consideration",
        onEnter: () => {
            gsap.to(".consideration", {
                backgroundColor: "#ececec",
                color: "#1c1c1c",
                // Otras propiedades CSS que quieras cambiar
            });
            gsap.to(".interest", {
                backgroundColor: "#ececec",
                color: "#1c1c1c",
                // Otras propiedades CSS que quieras cambiar
            });
        },
        onLeaveBack: () => {
            gsap.to(".consideration", {
                backgroundColor: "#1c1c1c",
                color: "#ececec",
                // Otras propiedades CSS que quieras cambiar
            });
            gsap.to(".interest", {
                backgroundColor: "#1c1c1c",
                color: "#ececec",
                // Otras propiedades CSS que quieras cambiar
            });
        },
    }
});

gsap.to(".action", {
    backgroundColor: "#8dc63f",
    scrollTrigger: {
        start: "top 50%",
        end: "top 50%",
        trigger: ".action",
        onEnter: () => {
            gsap.to(".consideration", {
                backgroundColor: "#8dc63f",
                // Otras propiedades CSS que quieras cambiar
            });
            gsap.to(".action", {
                backgroundColor: "#8dc63f",
                // Otras propiedades CSS que quieras cambiar
            });
        },
        onLeaveBack: () => {
            gsap.to(".consideration", {
                backgroundColor: "#ececec",
                // Otras propiedades CSS que quieras cambiar
            });
            gsap.to(".action", {
                backgroundColor: "#ececec",
                // Otras propiedades CSS que quieras cambiar
            });
        },
    }
});



let budgets = gsap.utils.toArray(".budget-single");
let budgetTween = gsap.to(budgets, {
    xPercent: -100 * (budgets.length - 1),
    ease: "none", 
    scrollTrigger: {
        trigger: ".budget",
        pin: true,
        scrub: 1,
        //snap: directionalSnap(1 / (sections.length - 1)),
        end: "+=3000",
    }
});



gsap.to(".budget", {
    backgroundColor: "#009246",
    color: "#ececec",
    scrollTrigger: {
        start: "top 50%",
        end: "top 50%",
        trigger: ".budget",
        onEnter: () => {
            gsap.to(".budget", {
                backgroundColor: "#009246",
                color: "#ececec",
                // Otras propiedades CSS que quieras cambiar
            });
            gsap.to(".action", {
                backgroundColor: "#009246",
                color: "#ececec",
                // Otras propiedades CSS que quieras cambiar
            });
        },
        onLeaveBack: () => {
            gsap.to(".budget", {
                backgroundColor: "#8dc63f",
                color: "#1c1c1c",
                // Otras propiedades CSS que quieras cambiar
            });
            gsap.to(".action", {
                backgroundColor: "#8dc63f",
                color: "#1c1c1c",
                // Otras propiedades CSS que quieras cambiar
            });
        },
    }
});


if (!isMobile) {
    let personas = gsap.utils.toArray(".persona");
    let personaTween = gsap.to(personas, {
        xPercent: -100 * (personas.length - 1),
        ease: "none", 
        scrollTrigger: {
            trigger: ".persona-container",
            pin: true,
            scrub: 1,
            //snap: directionalSnap(1 / (sections.length - 1)),
            end: "+=3000",
        }
    });
    
    
    const personaTexts = document.querySelectorAll(".persona-text");
    
    personaTexts.forEach((personaText, index) => {
        gsap.from(personaText, {
            opacity: 0,
            delay: .5,
            scrollTrigger: {
                trigger: personaText,
                containerAnimation: personaTween,
                start: "left right",
                end: "left 50%",
                toggleActions: "play none none reset",
                scrub: true,
                id: "3"
            }
        })
    })
    
    const funnelImages = document.querySelectorAll(".funnel-persona");
    
    funnelImages.forEach((funnelImage, index) => {
        gsap.fromTo(funnelImage, {
            scaleY: 0,
        }, {
            scaleY: 1,
            scrollTrigger: {
                trigger: funnelImage,
                containerAnimation: personaTween,
                start: "left 100%",
                end: "left 10%",
                toggleActions: "play none none reset",
                scrub: true,
                id: "4",
            }
        })
    })
}

if (isMobile) {
    const personaTexts = document.querySelectorAll(".persona-text");
    
    personaTexts.forEach((personaText, index) => {
        gsap.from(personaText, {
            opacity: 0,
            delay: .5,
            scrollTrigger: {
                trigger: personaText,
                start: "top 90%",
                end: "top: 50%",
                scrub: .5,
                toggleActions: "play none none reset"
            }
        })
    })
    
    const funnelImages = document.querySelectorAll(".funnel-persona");
    funnelImages.forEach((funnelImage, index) => {
        gsap.fromTo(funnelImage, {
            opacity: 0,
            scaleX: 0,
        },{
            opacity: 1,
            scaleX: 1.4,
            scrollTrigger: {
                trigger: funnelImage,
                start: "top 100%",
                end: "bottom 50%",
                scrub: .5,
                toggleActions: "play none none reset"
            }
        })
    })
}






gsap.to(".persona-intro", {
    backgroundColor: "#1c1c1c",
    scrollTrigger: {
        start: "top 50%",
        end: "top 50%",
        trigger: ".persona-intro",
        onEnter: () => {
            gsap.to(".persona-intro", {
                backgroundColor: "#1c1c1c",
                // Otras propiedades CSS que quieras cambiar
            });
            gsap.to(".budget", {
                backgroundColor: "#1c1c1c",
                // Otras propiedades CSS que quieras cambiar
            });
            gsap.to(".persona", {
                backgroundColor: "#1c1c1c",
                // Otras propiedades CSS que quieras cambiar
            });
        },
        onLeaveBack: () => {
            gsap.to(".persona-intro", {
                backgroundColor: "#009246",
                // Otras propiedades CSS que quieras cambiar
            });
            gsap.to(".budget", {
                backgroundColor: "#009246",
                // Otras propiedades CSS que quieras cambiar
            });
            gsap.to(".persona", {
                backgroundColor: "#009246",
                // Otras propiedades CSS que quieras cambiar
            });
        },
    }
});


const storiesAvatars = document.querySelectorAll(".stories-avatar");
const storiesModal = document.querySelector(".stories-modal");
const closeStoriesModal = document.querySelector("#close-modal");

storiesAvatars.forEach((avatar) => {
    avatar.addEventListener("click", () => {
        let avatarImageSrc = avatar.querySelector("img").src;
        avatarImageSrc = avatarImageSrc.substring(avatarImageSrc.lastIndexOf("img/"));
        const modalAvatar = storiesModal.querySelector("img");
        modalAvatar.src = avatarImageSrc;

        setTimeout(() => {
            storiesModal.classList.add("active");
        }, 500);
    })
})

closeStoriesModal.addEventListener("click", () => {
    storiesModal.classList.remove("active");
})