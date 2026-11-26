import { useEffect } from "react";
import parse, { domToReact, attributesToProps } from "html-react-parser";
import navMarkup from "./content/navigation.html?raw";
import pageMarkup from "./content/portfolio-shell.html?raw";
import { HeroSection, FlowerShowcase, SkillsSection, JourneySection, ServicesSection, ContactSection, MarqueeSection, PortfolioFooter } from "./components/Portfolio.jsx";
import { initLegacyAnimations } from "./legacy/animations.js";
const sectionMap={"flower-track":FlowerShowcase,flip:SkillsSection,scrolltrigger:JourneySection,services:ServicesSection,contact:ContactSection,marquee:MarqueeSection};
function renderMarkup(markup){
 const options={replace(node){
  if(node.type!=="tag")return;
  const Component=(node.name==="header"&&node.attribs?.id==="hero")?HeroSection:(node.attribs?.id&&sectionMap[node.attribs.id])||(node.name==="footer"?PortfolioFooter:null);
  if(!Component)return;
  return <Component {...attributesToProps(node.attribs)}>{domToReact(node.children||[],options)}</Component>;
 }};
 return parse(markup,options);
}
export default function App(){
 useEffect(()=>{initLegacyAnimations().catch(error=>console.error("Animation initialization failed",error));},[]);
 return <>{renderMarkup(navMarkup)}{renderMarkup(pageMarkup)}</>;
}
