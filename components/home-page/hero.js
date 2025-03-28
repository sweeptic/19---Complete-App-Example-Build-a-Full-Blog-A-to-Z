import Image from 'next/image';

import classes from './hero.module.css';

export default function HeroPage() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/max.jpg" width={300} height={200} alt="this is image here" />
      </div>
      <h1>Hi, Im Max</h1>
      <p>my blog about web developer</p>
    </section>
  );
}
