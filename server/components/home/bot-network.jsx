import React, { useEffect, useState } from "react";
import { NETWORK_BASE_URL } from "../../constants/api.js";

// 测试链接配置
const TESTING_LINKS = [
    {
        name: "bilibili",
        url: "https://bilibili.com/",
        icon: (
            <svg t="1732252062839" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4273" width="48" height="48"><path d="M729.32864 373.94944c-9.79456-5.94432-19.06176-6.784-19.14368-6.784l-1.06496-0.0512c-57.20064-3.8656-121.1648-5.83168-190.12608-5.83168l-13.98784 0.00512c-68.95616 0-132.92544 1.96096-190.12096 5.83168l-1.06496 0.0512c-0.08192 0-9.34912 0.83968-19.14368 6.784-15.04768 9.12896-24.27392 25.94816-27.4176 49.9712-10.07104 76.91264-4.38272 173.64992 0.18944 251.392 2.93888 49.96608 33.408 62.45888 85.04832 67.1488 10.78272 0.98816 69.08928 5.86752 159.50848 5.89312v-0.00512c90.4192-0.02048 148.72576-4.90496 159.5136-5.888 51.64032-4.68992 82.10944-17.18272 85.0432-67.1488 4.57728-77.74208 10.26048-174.47936 0.18944-251.392-3.1488-24.02816-12.37504-40.84736-27.42272-49.97632z m-390.9888 172.71808a23.64928 23.64928 0 0 1-31.68768-10.84416 23.68 23.68 0 0 1 10.84416-31.68768c2.03776-1.00352 50.69312-24.72448 110.5408-43.06432a23.68 23.68 0 1 1 13.88032 45.29152c-56.2944 17.24928-103.11168 40.07424-103.5776 40.30464z m268.89728 35.88608c-0.44032 2.23232-11.26912 54.64064-50.93888 54.64064-21.44256 0-36.10112-14.04928-44.98432-26.77248-8.69376 12.70784-22.80448 26.77248-42.65472 26.77248-35.5328 0-50.13504-48.26624-51.68128-53.77024a11.3664 11.3664 0 0 1 21.87776-6.1696c2.74944 9.6512 14.1312 37.20192 29.7984 37.20192 16.37376 0 28.89216-23.64416 31.98464-31.92832a11.37152 11.37152 0 0 1 10.6496-7.38816h0.06144c4.76672 0.03072 9.0112 3.02592 10.62912 7.50592 0.10752 0.28672 11.96544 31.81568 34.31424 31.81568 20.864 0 28.56448-35.95264 28.64128-36.32128a11.34592 11.34592 0 0 1 13.35808-8.93952 11.36128 11.36128 0 0 1 8.94464 13.35296z m110.11584-46.73536a23.68 23.68 0 0 1-31.68256 10.84416c-0.47104-0.2304-47.47264-23.1168-103.57248-40.30976a23.69024 23.69024 0 0 1-15.70816-29.58336 23.66976 23.66976 0 0 1 29.57824-15.70304c59.84768 18.33984 108.49792 42.0608 110.55104 43.06432a23.68 23.68 0 0 1 10.83392 31.68768z" fill="#F16C8D" p-id="4274"></path><path d="M849.92 51.2H174.08c-67.8656 0-122.88 55.0144-122.88 122.88v675.84c0 67.87072 55.0144 122.88 122.88 122.88h675.84c67.87072 0 122.88-55.00928 122.88-122.88V174.08c0-67.86048-55.00928-122.88-122.88-122.88z m-36.60288 627.45088c-2.62656 44.57984-21.82144 78.63296-55.51616 98.48832-25.68192 15.13472-54.17472 19.48672-81.13664 21.9392-32.45568 2.94912-92.71808 6.09792-164.66432 6.1184-71.94112-0.02048-132.20864-3.16416-164.66432-6.1184-26.96192-2.45248-55.45472-6.80448-81.13152-21.9392-33.69472-19.85536-52.8896-53.90336-55.51104-98.4832-4.70528-80.13312-10.5728-179.85536 0.19456-262.10816C221.5424 335.16544 280.99072 311.57248 311.5008 310.37952a2482.64192 2482.64192 0 0 1 81.42336-4.08576c-7.53664-8.53504-19.88096-23.3216-28.81536-38.11328-13.73696-22.73792 8.52992-41.68704 8.52992-41.68704s23.68-20.36736 44.52864 5.21216c15.69792 19.26656 38.37952 55.99744 48.61952 72.95488l53.20704-0.21504c13.2608 0 26.33216 0.07168 39.2192 0.21504 10.24-16.95744 32.9216-53.6832 48.61952-72.95488 20.84352-25.57952 44.52864-5.21216 44.52864-5.21216s22.26176 18.94912 8.5248 41.68704c-8.9344 14.79168-21.27872 29.57824-28.81536 38.11328 28.35968 0.97792 55.56224 2.33984 81.42336 4.08064 30.5152 1.19808 89.9584 24.79104 100.61312 106.17344 10.7776 82.24768 4.9152 181.96992 0.20992 262.10304z" fill="#F16C8D" p-id="4275"></path></svg>
        )
    },
    {
        name: "Github",
        url: "https://github.com/",
        icon: (
            <svg t="1732252105658" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5325" width="48" height="48"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#161614" p-id="5326"></path><path d="M411.306667 831.146667c3.413333-5.12 6.826667-10.24 6.826666-11.946667v-69.973333c-105.813333 22.186667-128-44.373333-128-44.373334-17.066667-44.373333-42.666667-56.32-42.666666-56.32-34.133333-23.893333 3.413333-23.893333 3.413333-23.893333 37.546667 3.413333 58.026667 39.253333 58.026667 39.253333 34.133333 58.026667 88.746667 40.96 110.933333 32.426667 3.413333-23.893333 13.653333-40.96 23.893333-51.2-85.333333-10.24-174.08-42.666667-174.08-187.733333 0-40.96 15.36-75.093333 39.253334-102.4-3.413333-10.24-17.066667-47.786667 3.413333-100.693334 0 0 32.426667-10.24 104.106667 39.253334 30.72-8.533333 63.146667-11.946667 95.573333-11.946667 32.426667 0 64.853333 5.12 95.573333 11.946667 73.386667-49.493333 104.106667-39.253333 104.106667-39.253334 20.48 52.906667 8.533333 90.453333 3.413333 100.693334 23.893333 27.306667 39.253333 59.733333 39.253334 102.4 0 145.066667-88.746667 177.493333-174.08 187.733333 13.653333 11.946667 25.6 34.133333 25.6 69.973333v104.106667c0 3.413333 1.706667 6.826667 6.826666 11.946667 5.12 6.826667 3.413333 18.773333-3.413333 23.893333-3.413333 1.706667-6.826667 3.413333-10.24 3.413333h-174.08c-10.24 0-17.066667-6.826667-17.066667-17.066666 0-5.12 1.706667-8.533333 3.413334-10.24z" fill="#FFFFFF" p-id="5327"></path></svg>
        )
    },
    {
        name: "YouTube",
        url: "https://youtube.com/",
        icon: (
            <svg t="1732252124556" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6401" width="48" height="48"><path d="M512.254947 959.556658c247.190491 0 447.583279-200.392788 447.583279-447.569969 0-247.161822-200.392788-447.544371-447.583279-447.544371-247.188443 0-447.556658 200.382549-447.556657 447.544371 0 247.178204 200.368215 447.569968 447.556657 447.569969" fill="#E9644A" p-id="6402"></path><path d="M599.154143 512.218088l-146.531301 86.062681V426.14312l146.531301 86.074968z m136.892444 79.792407V431.989505s0-77.134401-77.14464-77.134401H365.584399s-77.094469 0-77.09447 77.134401v160.019966s0 77.12109 77.09447 77.12109h293.318572c-0.001024 0 77.143616 0 77.143616-77.120066" fill="#FFFFFF" p-id="6403"></path></svg>
        )
    },
    {
        name: "Tiktok",
        url: "https://tiktok.com/",
        icon: (
            <svg t="1732252172100" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7825" width="48" height="48"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m294.4 390.8c-57.8 0.6-111.8-16.8-159.4-49.2v227.3c0.2 48.8-16.2 96.2-46.5 134.4s-72.7 65-120.2 76c-133.4 30.5-246.2-66-260.4-181.3-15-115.3 58.5-216.3 171.1-239 22-4.5 54.2-4.5 72.1-0.6v121.7c-5.1-1.3-10-2.6-15.2-3.2-44-7.8-86.6 14.2-104.1 54.4-8.6 19.6-10.3 41.5-4.9 62.2 5.4 20.7 17.7 38.9 34.7 51.8 29.7 23.3 62.8 26.5 96.5 11 33.7-14.9 51.6-42.1 55.5-79 0.6-5.2 0.5-11 0.5-16.8v-437c0-12.3 0.4-12.2 12.7-12.2h96.5c7.1 0 9.7 1.2 10.4 9.7 5.1 75.1 62.2 139.1 135.3 148.8 7.8 1.3 16.3 1.9 25.3 2.5v118.5z" fill="#252F3F" p-id="7826"></path></svg>
        )
    },
    // ... 其他链接配置类似
];

export function BotNetwork() {
    const [linksTime, setLinksTime] = useState(new Array(TESTING_LINKS.length).fill('NaN ms'));
    const [isLoading, setIsLoading] = useState(false);

    // 测试单个链接
    const testSingleLink = async (url, index) => {
        try {
            const response = await fetch(NETWORK_BASE_URL + url);
            const data = await response.json();
            setLinksTime(prev => {
                const newTimes = [...prev];
                newTimes[index] = `${data.time}ms`;
                return newTimes;
            });
        } catch (error) {
            console.error(`测试链接失败: ${url}`, error);
            setLinksTime(prev => {
                const newTimes = [...prev];
                newTimes[index] = '超时';
                return newTimes;
            });
        }
    };

    // 一键测速
    const handleTestAll = async () => {
        setIsLoading(true);
        setLinksTime(new Array(TESTING_LINKS.length).fill('测试中...'));

        try {
            await Promise.all(
                TESTING_LINKS.map((link, index) =>
                    testSingleLink(link.url, index)
                )
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="flex justify-between items-center">
                    <h2 className="card-title">🌐网速</h2>
                </div>
                <div>
                    <div className="flex flex-row pt-5 justify-between items-center">
                        { TESTING_LINKS.map((link, index) => (
                            <div key={ link.url } className="flex flex-col items-center space-y-4">
                                { link.icon }
                                <span className="badge badge-ghost">{ linksTime[index] }</span>
                            </div>
                        )) }
                    </div>
                    <div className="flex flex-row pt-5 justify-center items-center">
                        <button
                            className={ `btn btn-sm btn-ghost ${ isLoading ? 'loading loading-dots loading-xs' : '' }` }
                            onClick={ handleTestAll }
                            disabled={ isLoading }
                        >
                            { isLoading ? '' : '一键测速' }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
