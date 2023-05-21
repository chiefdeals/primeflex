import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import Head from 'next/head'

export function ExamplesDoc(props) {
    const code = {
        basic: `<div>
    <div class="animation-color animation-fill-none">fill-none</div>
    <div class="animation-color animation-fill-forwards">fill-forwards</div>
    <div class="animation-color animation-fill-backwards">fill-backwards</div>
    <div class="animation-color animation-fill-both flex">fill-both</div>
</div>

<style lang="scss">
@keyframes animation-color {
    0%{
        background-color: var(--blue-500);
        color: var(--gray-50);
    }
    100%{
        background-color: var(--yellow-500);
        color: var(--gray-900);
    }
}
.animation-color {
    animation: animation-color 3s linear;
}
</style>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center card-container blue-container">
        <div class="animation-color animation-fill-none flex align-items-center justify-content-center font-bold border-round m-2 px-5 py-3">fill-none</div>
        <div class="animation-color animation-fill-forwards flex align-items-center justify-content-center font-bold border-round m-2 px-5 py-3">fill-forwards</div>
        <div class="animation-color animation-fill-backwards flex align-items-center justify-content-center font-bold border-round m-2 px-5 py-3">fill-backwards</div>
        <div class="animation-color animation-fill-both flex align-items-center justify-content-center font-bold border-round m-2 px-5 py-3">fill-both</div>
    </div>
</div>

<style lang="scss">
@keyframes animation-color {
    0%{
        background-color: var(--blue-500);
        color: var(--gray-50);
    }
    100%{
        background-color: var(--yellow-500);
        color: var(--gray-900);
    }
}
.animation-color {
    animation: animation-color 3s linear;
}
</style>
`
    };

    return (
        <>
            <Head>
                <style>
                    {`
            @keyframes animation-color {
                0%{
                    background-color: var(--blue-500);
                    color: var(--gray-50);
                }
                100%{
                    background-color: var(--yellow-500);
                    color: var(--gray-900);
                }
            }
            .animation-color {
                animation: animation-color 3s linear;
            }
          `}
                </style>
            </Head>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center card-container blue-container">
                    <div className="animation-color animation-fill-none flex align-items-center justify-content-center font-bold border-round m-2 px-5 py-3">fill-none</div>
                    <div className="animation-color animation-fill-forwards flex align-items-center justify-content-center font-bold border-round m-2 px-5 py-3">fill-forwards</div>
                    <div className="animation-color animation-fill-backwards flex align-items-center justify-content-center font-bold border-round m-2 px-5 py-3">fill-backwards</div>
                    <div className="animation-color animation-fill-both flex align-items-center justify-content-center font-bold border-round m-2 px-5 py-3">fill-both</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
