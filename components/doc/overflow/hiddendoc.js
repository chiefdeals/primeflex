import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function HiddenDoc(props) {
    const code = {
        basic: `<div class="overflow-hidden" style="height: 100px">
    Lorem ipsum dolor sit ame...
</div>
    `,
        expanded: `<div class="card">
    <div class="line-height-3 card-container yellow-container">
        <div class="overflow-hidden surface-overlay p-3 border-yellow-500 border-2 border-round" style="height: 100px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
    </div>
</div>
    
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Overflown content is clipped and rest of the content will not bevisible.</p>
            </DocSectionText>
            <div className="card">
                <div className="line-height-3 card-container yellow-container">
                    <div className="overflow-hidden surface-overlay p-3 border-yellow-500 border-2 border-round" style={{ height: '100px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
