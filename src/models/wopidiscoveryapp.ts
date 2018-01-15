export interface wopidiscoveryapp {
    $ : schema,
    action : object[]

}

export interface schema {
    app: string;
    favIconUrl: string;
    checkLicense: boolean;
    name: string;
    ext: string;
    progId: string;
    requires: string;
    isDefault: boolean;
    urlsrc: string;
}