gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: 'none', duration: 2 });

//-------------------------------------- LOGO

gsap.from( '.logo div', {
    opacity: 0.5,
    delay: 1,
    x:100
})

gsap.from( '.logo img', {
    opacity: 0.25,
    delay: 1,
})

//------------------------------------- MENU-ITEMS

const menu_items = document.querySelector('.menu-items');

gsap.from(menu_items.children, {
    opacity: 0,
    x: 0,
    duration: 0.25,
    delay: 0.5,
    stagger: {
        amount: 1,
    }
})

//------------------------------------- STARS

gsap.utils.toArray('.star').forEach(star=>{
    gsap.fromTo(star, {
        rotation: 450,
        opacity: 0,
        y: 100
    }, {
        rotation: 0,
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scale: 1.5,
        scrollTrigger: star,
    })
})

//------------------------------------ TITLE

gsap.utils.toArray('.title').forEach(title=> {
    gsap.fromTo(title, {
        //letterSpacing: '10px',
        opacity:0,
        x:300,
        skewX: 50,
    }, {
        //letterSpacing: '0',
        opacity: 1,
        x: 0,
        duration: 0.5,
        delay: .25,
        skewX: 0,
        scrollTrigger: title,
    })
})

gsap.utils.toArray('.p').forEach(p=>{
    gsap.fromTo(p, {
        opacity: 0,
        x:150,
        
    }, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        delay: .5,
        scrollTrigger: p
    })
})

//------------------------------- BUTTON

gsap.utils.toArray('button').forEach(button=>{
    gsap.fromTo(button, {
        opacity: 0,
      
        
    }, {
        opacity: 1,
        duration: 1,
        delay: .5,
        scrollTrigger: button
    })
})


// -------------------------------- HERO IMG

gsap.from('.spaceship', {
    opacity: 0,
    scale: .5,
    duration: .25,
    delay: .5,
})

// -------------------------------- EXPLORE

gsap.fromTo('.explore', {
    scale: .2,
    opacity: 0,
    skewY: 30,
    
}, {
    scale: 1,
    skewY: 0,
    opacity: 1,
    duration: 1,
    delay: .5,
    scrollTrigger: '.explore',
})


//------------------------------- LINE

gsap.utils.toArray('.line').forEach(line=>{
    gsap.fromTo(line, {
        opacity: 0,
        width: '0%',
        
    }, {
        opacity: 1,
        width: '100%',
        duration: 1,
        delay: .5,
        scrollTrigger: line
    })
})


gsap.utils.toArray('.line-large').forEach(linelarge=>{
    gsap.fromTo(linelarge, {
        opacity: 0,
        width: '0%',
        
    }, {
        opacity: 1,
        width: '100%',
        duration: 1,
        delay: .5,
        scrollTrigger: linelarge
    })
})

// -------------------------------------- CARD ROTATION

gsap.utils.toArray('.rotation').forEach(rotate=>{
    gsap.fromTo(rotate, {
        opacity: 0,
        rotation: 350,
        scale: .2
        
    }, {
        opacity: 1,
        rotation: 0,
        scale: 1,
        duration: 1,
        delay: .5,
        scrollTrigger: rotate
    })
})
