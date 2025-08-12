export type ButtonProps = {
   img: string;
   text: string;
   onClick: () => void;
};

export type SongProps = {
   id: string;
   title: string;
   artist: string;
   album: string;
   coverImage: string;
   audioFileURL: string;
}