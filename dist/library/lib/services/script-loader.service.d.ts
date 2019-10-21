interface Scripts {
    name: string;
    src: string;
}
export declare const ScriptStore: Scripts[];
export declare class ScriptLoaderService {
    private scripts;
    constructor();
    load(...scripts: string[]): Promise<any[]>;
    loadScript(name: string): Promise<{}>;
}
export {};
