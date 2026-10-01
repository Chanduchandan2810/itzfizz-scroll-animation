'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

import Header from './Header';
import Crowd, { CROWD_DATA } from './Crowd';
import HeroTypography from './HeroTypography';
import Metrics from './Metrics';
import Confetti from './Confetti';
import ScrollProgress from './ScrollProgress';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function HeroStage() {
  const containerRef = useRef(null);
  const pinRef = useRef(null);
  const stRef = useRef(null);

  const handleToggle = () => {
    const st = stRef.current;
    if (!st) return;
    if (st.progress < 0.95) {
      gsap.to(window, { scrollTo: st.end, duration: 2.5, ease: 'power3.inOut', overwrite: 'auto' });
    } else {
      gsap.to(window, { scrollTo: st.start, duration: 2.5, ease: 'power3.inOut', overwrite: 'auto' });
    }
  };

  useGSAP(() => {
    // Procedural Calm Idle Life Loop
    const calmIdleTweens = [];
    CROWD_DATA.forEach((char, i) => {
      const el = document.getElementById(char.id);
      if (!el) return;
      
      const head = el.querySelector('.char-head-group');
      const bodyGroup = el.querySelector('.char-body-group');
      const armRight = el.querySelector('.arm-right');
      const shadow = el.querySelector('.char-shadow');

      const delay = (i * 0.17) % 0.8;
      const baseDuration = 1.6 + ((i % 5) * 0.25);

      if (bodyGroup) {
        calmIdleTweens.push(
          gsap.to(bodyGroup, { y: -4, duration: baseDuration, repeat: -1, yoyo: true, ease: 'sine.inOut', delay })
        );
      }
      if (shadow) {
        calmIdleTweens.push(
          gsap.to(shadow, { scaleX: 0.92, scaleY: 0.88, opacity: 0.7, duration: baseDuration, repeat: -1, yoyo: true, ease: 'sine.inOut', delay })
        );
      }
      if (head) {
        const tiltAngle = (i % 2 === 0 ? 1 : -1) * (3 + (i % 4));
        calmIdleTweens.push(
          gsap.to(head, { rotation: tiltAngle, duration: baseDuration * 1.3, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: delay * 1.2 })
        );
      }
      if (armRight && (char.pose === 'wave' || char.pose === 'cheer')) {
        calmIdleTweens.push(
          gsap.to(armRight, { rotation: -14, duration: 0.55 + ((i % 3) * 0.1), repeat: -1, yoyo: true, ease: 'power1.inOut', transformOrigin: 'top center', delay })
        );
      }
    });

    // Dance Choreography arrays
    let isDancing = false;
    const danceTweens = [];

    const startDancing = () => {
      if (isDancing) return;
      isDancing = true;
      calmIdleTweens.forEach(t => t.pause());

      CROWD_DATA.forEach((char, index) => {
        const el = document.getElementById(char.id);
        if (!el) return;

        const bodyGroup = el.querySelector('.char-body-group');
        const torsoWrapper = el.querySelector('.char-torso-wrapper');
        const leftArm = el.querySelector('.arm-left');
        const rightArm = el.querySelector('.arm-right');
        const head = el.querySelector('.char-head-group');
        const shadow = el.querySelector('.char-shadow');

        const tempo = 0.34 + ((index % 4) * 0.04);
        const delay = (index * 0.05) % tempo;

        if (bodyGroup) danceTweens.push(gsap.to(bodyGroup, { y: -20 - (index % 3) * 5, duration: tempo, repeat: -1, yoyo: true, ease: 'power2.out', delay }));
        if (shadow) danceTweens.push(gsap.to(shadow, { scaleX: 0.68, scaleY: 0.58, opacity: 0.4, duration: tempo, repeat: -1, yoyo: true, ease: 'power2.out', delay }));
        if (leftArm) danceTweens.push(gsap.to(leftArm, { rotation: -45 + ((index % 2 === 0 ? 1 : -1) * 20), duration: tempo * 1.1, repeat: -1, yoyo: true, ease: 'sine.inOut', transformOrigin: 'top center', delay: delay * 0.8 }));
        if (rightArm) danceTweens.push(gsap.to(rightArm, { rotation: 45 + ((index % 2 === 0 ? -1 : 1) * 20), duration: tempo * 0.95, repeat: -1, yoyo: true, ease: 'sine.inOut', transformOrigin: 'top center', delay: delay * 1.2 }));
        if (torsoWrapper) danceTweens.push(gsap.to(torsoWrapper, { rotation: (index % 2 === 0 ? 1 : -1) * 8, duration: tempo * 1.8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay }));
        if (head) danceTweens.push(gsap.to(head, { rotation: (index % 2 === 0 ? -1 : 1) * 12, duration: tempo * 1.4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: delay * 0.5 }));
      });
    };

    const stopDancing = () => {
      if (!isDancing) return;
      isDancing = false;
      danceTweens.forEach(t => t.kill());
      danceTweens.length = 0;

      CROWD_DATA.forEach(char => {
        const el = document.getElementById(char.id);
        if (!el) return;
        const bodyGroup = el.querySelector('.char-body-group');
        const torsoWrapper = el.querySelector('.char-torso-wrapper');
        const leftArm = el.querySelector('.arm-left');
        const rightArm = el.querySelector('.arm-right');
        const head = el.querySelector('.char-head-group');
        const shadow = el.querySelector('.char-shadow');

        if (bodyGroup) gsap.to(bodyGroup, { y: 0, duration: 0.35, ease: 'power2.out' });
        if (torsoWrapper) gsap.to(torsoWrapper, { rotation: 0, duration: 0.35, ease: 'power2.out' });
        if (leftArm) gsap.to(leftArm, { rotation: 0, duration: 0.35, ease: 'power2.out' });
        if (rightArm) gsap.to(rightArm, { rotation: 0, duration: 0.35, ease: 'power2.out' });
        if (head) gsap.to(head, { rotation: 0, duration: 0.35, ease: 'power2.out' });
        if (shadow) gsap.to(shadow, { scaleX: 1, scaleY: 1, opacity: 0.7, duration: 0.35 });
      });

      calmIdleTweens.forEach(t => t.resume());
    };

    // Update UI Elements based on progress
    const updateUI = (p) => {
      const progressBar = document.getElementById('scroll-progress-bar');
      const stageLabel = document.getElementById('scroll-stage-label');
      const stepDots = document.querySelectorAll('.step-dot');
      const confettiContainer = document.getElementById('confetti-container');
      const statusBadgeText = document.getElementById('status-badge-text');

      if (progressBar) progressBar.style.height = `${p * 100}%`;
      
      let stage = '01';
      if (p >= 0.75) stage = '04';
      else if (p >= 0.45) stage = '03';
      else if (p >= 0.2) stage = '02';
      if (stageLabel) stageLabel.textContent = stage;

      stepDots.forEach(dot => {
        const stepVal = parseFloat(dot.getAttribute('data-step'));
        if (Math.abs(p - stepVal) < 0.18) {
          dot.classList.add('bg-[#E65D3F]');
          dot.classList.remove('bg-black/20');
        } else {
          dot.classList.remove('bg-[#E65D3F]');
          dot.classList.add('bg-black/20');
        }
      });

      if (confettiContainer) {
        let confOpacity = 0;
        if (p < 0.3) confOpacity = 0;
        else if (p < 0.6) confOpacity = ((p - 0.3) / 0.3) * 0.3;
        else if (p < 0.85) confOpacity = 0.3 + ((p - 0.6) / 0.25) * 0.3;
        else confOpacity = 0.6 + ((p - 0.85) / 0.15) * 0.4;
        confettiContainer.style.opacity = confOpacity.toFixed(2);
      }

      if (p >= 0.85) {
        if (window.startGlitter) window.startGlitter();
        startDancing();
        if (statusBadgeText) statusBadgeText.textContent = '🎉 Celebration in Full Swing';
      } else {
        if (window.stopGlitter) window.stopGlitter();
        stopDancing();
        if (statusBadgeText) statusBadgeText.textContent = 'Interactive Crowd Stage';
      }

      const btnText = document.getElementById('btn-text');
      const btnIcon = document.querySelector('#stage-toggle-btn .material-symbols-outlined');
      if (btnText && btnIcon) {
        if (p >= 0.99) {
          btnText.textContent = 'Reset';
          btnIcon.textContent = 'refresh';
        } else {
          btnText.textContent = 'Celebrate';
          btnIcon.textContent = 'arrow_forward';
        }
      }
    };

    // Master ScrollTimeline Setup
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => updateUI(self.progress)
      }
    });

    stRef.current = tl.scrollTrigger;

    tl.to('.group-left', { x: '-=11vw', rotation: -4, duration: 0.35, ease: 'power2.inOut' }, 0.05)
      .to('.group-center-left', { x: '-=16vw', y: '+=1.5vh', rotation: -5, duration: 0.35, ease: 'power2.inOut' }, 0.05)
      .to('.group-center-right', { x: '+=16vw', y: '+=1.5vh', rotation: 5, duration: 0.35, ease: 'power2.inOut' }, 0.05)
      .to('.group-right', { x: '+=11vw', rotation: 4, duration: 0.35, ease: 'power2.inOut' }, 0.05);

    tl.to('.letter-welcome', { opacity: 1, y: 0, scale: 1, stagger: 0.025, duration: 0.3, ease: 'back.out(1.8)' }, 0.22);
    tl.to('.depth-bg', { y: '-=12px', scale: '+=0.03', duration: 0.25, ease: 'sine.out' }, 0.28);
    
    tl.to('.letter-itzfizz', { opacity: 1, y: 0, scale: 1, stagger: { each: 0.035, from: 'center' }, duration: 0.35, ease: 'power3.out' }, 0.44);
    tl.to('#hero-subtext', { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }, 0.60);
    
    tl.to('.arm-left, .arm-right', { rotation: -25, duration: 0.25, ease: 'back.out(2)' }, 0.62)
      .to('.char-body-group', { y: '-=12px', duration: 0.25, stagger: 0.012, ease: 'sine.out' }, 0.64);
      
    tl.to('#metric-1', { opacity: 1, x: 0, duration: 0.25, ease: 'power2.out' }, 0.70)
      .to('#metric-2', { opacity: 1, x: 0, duration: 0.25, ease: 'power2.out' }, 0.73)
      .to('#metric-3', { opacity: 1, x: 0, duration: 0.25, ease: 'power2.out' }, 0.76)
      .to('#metric-4', { opacity: 1, x: 0, duration: 0.25, ease: 'power2.out' }, 0.79);

    tl.to('#crowd-stage', { scale: 1.015, duration: 0.2, ease: 'none' }, 0.80);

    // Initial entrance animations
    gsap.from('#site-header', { y: -25, opacity: 0, duration: 0.7, ease: 'power3.out' });
    gsap.from('.character-container', { y: 60, opacity: 0, scale: 0.4, stagger: { each: 0.03, from: 'center' }, duration: 0.9, ease: 'back.out(1.4)' });
    gsap.to('#kicker-badge', { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', delay: 0.5 });
    
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full relative h-[500vh]">
      <div ref={pinRef} className="w-full h-[100dvh] max-h-[100dvh] overflow-hidden sticky top-0 bg-[#FBF9F5] flex flex-col justify-between">
        <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(20,20,22,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,20,22,0.035) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse 70% 45% at 50% 68%, #EAE4D6 0%, rgba(251,249,245,0) 80%)' }}></div>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/80 rounded-full blur-3xl pointer-events-none z-0"></div>

        <Header onAction={handleToggle} />
        <Confetti />
        <HeroTypography />
        <Metrics />
        <Crowd />
        <ScrollProgress />
        
        {/* Footer */}
        <footer className="w-full px-6 md:px-12 py-3 flex flex-row items-center justify-between text-[11px] font-mono tracking-widest text-[#8a8a8a] z-40 pointer-events-none absolute bottom-0 left-0 right-0 select-none">
          <div className="shrink-0 flex items-center gap-2">
            <span className="hidden sm:inline font-medium">© ITZFIZZ STUDIO · ALL RIGHTS RESERVED</span>
            <span className="sm:hidden font-medium">© ITZFIZZ STUDIO</span>
          </div>
          <div className="flex-1 flex items-center justify-center px-4">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-5.5 sm:w-4 sm:h-6 rounded-full border border-[#8a8a8a]/60 flex items-start justify-center p-0.5 sm:p-1 shrink-0">
                <div className="w-1 h-1.5 bg-[#8a8a8a] rounded-full animate-bounce"></div>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#8a8a8a] truncate text-center">SCROLL TO DIRECT THE CROWD</span>
            </div>
          </div>
          <div className="shrink-0 hidden md:flex items-center gap-2 text-right">
            <span className="font-medium text-[#8a8a8a]">USE WHEEL / TOUCH</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
