function Section({as:Tag="section",children,...props}){return <Tag {...props}>{children}</Tag>;}
export function HeroSection(props){const{children,...rest}=props;return <Section as="header" {...rest}>{children}</Section>;}
export function FlowerShowcase(props){return <Section {...props}/>;}
export function SkillsSection(props){return <Section {...props}/>;}
export function JourneySection(props){return <Section {...props}/>;}
export function ServicesSection(props){return <Section {...props}/>;}
export function ContactSection(props){return <Section {...props}/>;}
export function MarqueeSection(props){return <Section {...props}/>;}
export function PortfolioFooter(props){const{children,...rest}=props;return <Section as="footer" {...rest}>{children}</Section>;}
