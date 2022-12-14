import crypto from "crypto";



interface BlockShape {
  prevHash: string;
  height: number;
  data: string;
  hash: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ){
    this.hash = Block.calculatedHash(prevHash, height, data);
  }

  static calculatedHash(prevHash: string, height: number, data:string):string{
    const toHash = `${prevHash}${height}${data}`
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}



