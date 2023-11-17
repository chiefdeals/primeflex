import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExampleDoc(props) {
    const code = `<div class="flex flex-wrap md:justify-content-between justify-content-center">
    <svg class="fill-primary-500 h-10rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.08 10.96H11.7V4H10.35L9.37997 6.31L4.96997 5.95L5.70997 9.01L10.96 10.96H11.08ZM8.51996 11.33L7.16996 9.98L5.82996 9.5V13.65L8.75996 16.09V12.3L9.61996 11.08L8.51996 11.33ZM15.3599 11.33L14.2599 11.08L15.1199 12.3V16.09L18.0499 13.65V9.5L16.6999 9.98L15.3599 11.33ZM10.7199 11.45H13.1599L13.7699 11.08L14.7499 12.55V18.05L14.0199 19.14L13.1599 20H10.7199L9.85994 19.14L9.12994 18.05V12.55L10.1099 11.08L10.7199 11.45ZM15.12 18.41L16.7 16.82V15.24L15.12 16.58V18.41ZM8.75998 18.41L7.16998 16.82V15.24L8.75998 16.58V18.41ZM13.53 4L14.5 6.31L19 6L18.25 9L13 11H12.18V4H13.53ZM17.32 5.71L15.6 4H13.89L14.75 5.95L17.32 5.71ZM8.27 4H9.98L9.13 5.95L6.56 5.71L8.27 4Z"
        />
    </svg>
    <svg class="fill-cyan-500 h-10rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.08 10.96H11.7V4H10.35L9.37997 6.31L4.96997 5.95L5.70997 9.01L10.96 10.96H11.08ZM8.51996 11.33L7.16996 9.98L5.82996 9.5V13.65L8.75996 16.09V12.3L9.61996 11.08L8.51996 11.33ZM15.3599 11.33L14.2599 11.08L15.1199 12.3V16.09L18.0499 13.65V9.5L16.6999 9.98L15.3599 11.33ZM10.7199 11.45H13.1599L13.7699 11.08L14.7499 12.55V18.05L14.0199 19.14L13.1599 20H10.7199L9.85994 19.14L9.12994 18.05V12.55L10.1099 11.08L10.7199 11.45ZM15.12 18.41L16.7 16.82V15.24L15.12 16.58V18.41ZM8.75998 18.41L7.16998 16.82V15.24L8.75998 16.58V18.41ZM13.53 4L14.5 6.31L19 6L18.25 9L13 11H12.18V4H13.53ZM17.32 5.71L15.6 4H13.89L14.75 5.95L17.32 5.71ZM8.27 4H9.98L9.13 5.95L6.56 5.71L8.27 4Z"
        />
    </svg>
    <svg class="fill-purple-400 h-10rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.08 10.96H11.7V4H10.35L9.37997 6.31L4.96997 5.95L5.70997 9.01L10.96 10.96H11.08ZM8.51996 11.33L7.16996 9.98L5.82996 9.5V13.65L8.75996 16.09V12.3L9.61996 11.08L8.51996 11.33ZM15.3599 11.33L14.2599 11.08L15.1199 12.3V16.09L18.0499 13.65V9.5L16.6999 9.98L15.3599 11.33ZM10.7199 11.45H13.1599L13.7699 11.08L14.7499 12.55V18.05L14.0199 19.14L13.1599 20H10.7199L9.85994 19.14L9.12994 18.05V12.55L10.1099 11.08L10.7199 11.45ZM15.12 18.41L16.7 16.82V15.24L15.12 16.58V18.41ZM8.75998 18.41L7.16998 16.82V15.24L8.75998 16.58V18.41ZM13.53 4L14.5 6.31L19 6L18.25 9L13 11H12.18V4H13.53ZM17.32 5.71L15.6 4H13.89L14.75 5.95L17.32 5.71ZM8.27 4H9.98L9.13 5.95L6.56 5.71L8.27 4Z"
        />
    </svg>
    <svg class="fill-black h-10rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.08 10.96H11.7V4H10.35L9.37997 6.31L4.96997 5.95L5.70997 9.01L10.96 10.96H11.08ZM8.51996 11.33L7.16996 9.98L5.82996 9.5V13.65L8.75996 16.09V12.3L9.61996 11.08L8.51996 11.33ZM15.3599 11.33L14.2599 11.08L15.1199 12.3V16.09L18.0499 13.65V9.5L16.6999 9.98L15.3599 11.33ZM10.7199 11.45H13.1599L13.7699 11.08L14.7499 12.55V18.05L14.0199 19.14L13.1599 20H10.7199L9.85994 19.14L9.12994 18.05V12.55L10.1099 11.08L10.7199 11.45ZM15.12 18.41L16.7 16.82V15.24L15.12 16.58V18.41ZM8.75998 18.41L7.16998 16.82V15.24L8.75998 16.58V18.41ZM13.53 4L14.5 6.31L19 6L18.25 9L13 11H12.18V4H13.53ZM17.32 5.71L15.6 4H13.89L14.75 5.95L17.32 5.71ZM8.27 4H9.98L9.13 5.95L6.56 5.71L8.27 4Z"
        />
    </svg>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap md:justify-content-between justify-content-center">
                    <svg className="fill-primary-500 h-10rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.08 10.96H11.7V4H10.35L9.37997 6.31L4.96997 5.95L5.70997 9.01L10.96 10.96H11.08ZM8.51996 11.33L7.16996 9.98L5.82996 9.5V13.65L8.75996 16.09V12.3L9.61996 11.08L8.51996 11.33ZM15.3599 11.33L14.2599 11.08L15.1199 12.3V16.09L18.0499 13.65V9.5L16.6999 9.98L15.3599 11.33ZM10.7199 11.45H13.1599L13.7699 11.08L14.7499 12.55V18.05L14.0199 19.14L13.1599 20H10.7199L9.85994 19.14L9.12994 18.05V12.55L10.1099 11.08L10.7199 11.45ZM15.12 18.41L16.7 16.82V15.24L15.12 16.58V18.41ZM8.75998 18.41L7.16998 16.82V15.24L8.75998 16.58V18.41ZM13.53 4L14.5 6.31L19 6L18.25 9L13 11H12.18V4H13.53ZM17.32 5.71L15.6 4H13.89L14.75 5.95L17.32 5.71ZM8.27 4H9.98L9.13 5.95L6.56 5.71L8.27 4Z"
                        />
                    </svg>
                    <svg className="fill-cyan-500 h-10rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.08 10.96H11.7V4H10.35L9.37997 6.31L4.96997 5.95L5.70997 9.01L10.96 10.96H11.08ZM8.51996 11.33L7.16996 9.98L5.82996 9.5V13.65L8.75996 16.09V12.3L9.61996 11.08L8.51996 11.33ZM15.3599 11.33L14.2599 11.08L15.1199 12.3V16.09L18.0499 13.65V9.5L16.6999 9.98L15.3599 11.33ZM10.7199 11.45H13.1599L13.7699 11.08L14.7499 12.55V18.05L14.0199 19.14L13.1599 20H10.7199L9.85994 19.14L9.12994 18.05V12.55L10.1099 11.08L10.7199 11.45ZM15.12 18.41L16.7 16.82V15.24L15.12 16.58V18.41ZM8.75998 18.41L7.16998 16.82V15.24L8.75998 16.58V18.41ZM13.53 4L14.5 6.31L19 6L18.25 9L13 11H12.18V4H13.53ZM17.32 5.71L15.6 4H13.89L14.75 5.95L17.32 5.71ZM8.27 4H9.98L9.13 5.95L6.56 5.71L8.27 4Z"
                        />
                    </svg>
                    <svg className="fill-purple-400 h-10rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.08 10.96H11.7V4H10.35L9.37997 6.31L4.96997 5.95L5.70997 9.01L10.96 10.96H11.08ZM8.51996 11.33L7.16996 9.98L5.82996 9.5V13.65L8.75996 16.09V12.3L9.61996 11.08L8.51996 11.33ZM15.3599 11.33L14.2599 11.08L15.1199 12.3V16.09L18.0499 13.65V9.5L16.6999 9.98L15.3599 11.33ZM10.7199 11.45H13.1599L13.7699 11.08L14.7499 12.55V18.05L14.0199 19.14L13.1599 20H10.7199L9.85994 19.14L9.12994 18.05V12.55L10.1099 11.08L10.7199 11.45ZM15.12 18.41L16.7 16.82V15.24L15.12 16.58V18.41ZM8.75998 18.41L7.16998 16.82V15.24L8.75998 16.58V18.41ZM13.53 4L14.5 6.31L19 6L18.25 9L13 11H12.18V4H13.53ZM17.32 5.71L15.6 4H13.89L14.75 5.95L17.32 5.71ZM8.27 4H9.98L9.13 5.95L6.56 5.71L8.27 4Z"
                        />
                    </svg>
                    <svg className="fill-black h-10rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.08 10.96H11.7V4H10.35L9.37997 6.31L4.96997 5.95L5.70997 9.01L10.96 10.96H11.08ZM8.51996 11.33L7.16996 9.98L5.82996 9.5V13.65L8.75996 16.09V12.3L9.61996 11.08L8.51996 11.33ZM15.3599 11.33L14.2599 11.08L15.1199 12.3V16.09L18.0499 13.65V9.5L16.6999 9.98L15.3599 11.33ZM10.7199 11.45H13.1599L13.7699 11.08L14.7499 12.55V18.05L14.0199 19.14L13.1599 20H10.7199L9.85994 19.14L9.12994 18.05V12.55L10.1099 11.08L10.7199 11.45ZM15.12 18.41L16.7 16.82V15.24L15.12 16.58V18.41ZM8.75998 18.41L7.16998 16.82V15.24L8.75998 16.58V18.41ZM13.53 4L14.5 6.31L19 6L18.25 9L13 11H12.18V4H13.53ZM17.32 5.71L15.6 4H13.89L14.75 5.95L17.32 5.71ZM8.27 4H9.98L9.13 5.95L6.56 5.71L8.27 4Z"
                        />
                    </svg>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
