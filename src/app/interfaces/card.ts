export interface Card{
    heading : string;
    number : string;
    percent : Percent;
    icon : string;
}

interface Percent{
    number : number;
    success : boolean;
}