import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  image?: string
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Technical beauty',
    image: 'https://media.forgecdn.net/avatars/thumbnails/495/526/256/256/637808944989585825.jpeg',
    description: (
      <>
        Beautiful-Create is more than just another modpack. We strive to create a visual beautiful experience for all players.
      </>
    ),
  },
  {
    title: 'Latest versions',
    image: require('@site/static/img/create.png').default,
    description: (
      <>
        We strive to keep our mods up to date with the latest versions of Create and its addons.
      </>
    ),
  },
  {
    title: 'Powered by Neoforge',
    image: 'https://neoforged.net/img/content/branding/banner.png',
    description: (
      <>
        Neoforge is the next generation of minecraft mod frameworks and we belive it is the future of modding.
      </>
    ),
  },
];

function Feature({title, Svg, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} alt={title} />}
        {image && <img src={image} alt={title} height={100}/>}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
