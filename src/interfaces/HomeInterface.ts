export interface CardRandom {
  id: number
  path: string
  width: string
  heigh: string
  bg:string
  backdrop:string
  position: {
    top: string
    right: string
    bottom: string
    left: string
  }
  zIndex: string
}

export interface Translation {
  x: number
  y: number
}

export interface BulletState extends Translation {
  opacity: string
  id: number
}

export interface ListHeaderItem {
  id: number;
  title: string;
  width: string;
  x_direc: string;
  margin_top: string;
  delay ?: string
}


