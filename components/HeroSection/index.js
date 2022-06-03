import React from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';
import Button from '../Button';

const Index = () => {
    return (
        <section className={`text-center ${styles.wrapper}`}>
            <div className={styles.cover}>
                <div className={styles.title}>
                    <h1>
                        sator
                    </h1>
                    <div className={styles.titleObjects}>
                        <i className={styles.icon1}>
                            <Image src="/Vector1.svg" alt="" width={43} height={43} />
                        </i>
                        <i className={styles.icon2}>
                            <Image src="/Vector2.svg" alt="" width={88} height={88} />
                        </i>
                    </div>
                </div>
                <h2>
                    Web3 entertainment network
                </h2>
                <div className={`flex-container align-middle ${styles.buttonGroup}`}>
                    <Button
                        fullBtn={true}
                        text={"Download Sator App"}
                    />
                    <Button
                        fullBtn={true}
                        text={"Enter the NFT Marketplace"}
                    />
                </div>
                <div className={`flex-container align-middle align-center ${styles.appLinks}`}>
                    <a href="" target="_blank">
                        <Image src="/Group77.svg" alt="" width={22} height={17} />
                    </a>
                    <a href="" target="_blank">
                        <Image src="/Group78.svg" alt="" width={23} height={16} />
                    </a>
                    <a href="" target="_blank">
                        <Image src="/Subtract.svg" alt="" width={18} height={20} />
                    </a>
                    <a href="" target="_blank">
                        <Image src="/Group80.svg" alt="" width={20} height={16} />
                    </a>
                    <a href="" target="_blank">
                        <Image src="/Group81.svg" alt="" width={24} height={24} />
                    </a>
                    <a href="" target="_blank">
                        <Image src="/Group82.svg" alt="" width={21} height={21} />
                    </a>
                </div>
                <div className="description">
                    <p>
                        The Sator platform aligns content ecosystem participants in an open economy that increases value creation and distribution
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Index;