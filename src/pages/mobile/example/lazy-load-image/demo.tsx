import React, {useEffect} from "react";
import styles from './index.module.scss'
import {AutoCenter} from "antd-mobile";

const Demo:React.FC = () => {
    useEffect(() =>{
        const imgList = Array.from(document.querySelectorAll('img'));
        let io = new IntersectionObserver((entries) =>{
            entries.forEach(item =>{
                if(item.isIntersecting) { //元素可见性
                    const image = item.target as HTMLImageElement;
                    image.src=image.dataset.src!; //将src给到图片标签
                    io.unobserve(item.target);
                }
            })
        }, {
            root: document.querySelector('.root')
        })
        imgList.forEach(img => io.observe(img));
    }, [])
  const url = "/"
    return (
        <React.Fragment>
            <div className={styles.myImg}>
                <AutoCenter>
                    <img data-src={url+ 'img/my/wu1.jpg'}/>
                    <img data-src={url+ 'img/my/wu2.jpg'}/>
                    <img data-src={url+ 'img/my/wu3.jpg'}/>
                    <img data-src={url+ 'img/my/wu4.jpg'}/>
                    <img data-src={url+ 'img/my/ao1.jpg'}/>
                    <img data-src={url+ 'img/my/ao2.jpg'}/>
                    <img data-src={url+ 'img/my/ao3.jpg'}/>
                    <img data-src={url+ 'img/my/ao1.jpg'}/>
                    <img data-src={url+ 'img/my/wu1.jpg'}/>
                    <img data-src={url+ 'img/my/wu2.jpg'}/>
                </AutoCenter>
            </div>
        </React.Fragment>
    )
}
export default Demo
