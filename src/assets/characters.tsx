import AkaneImage from "@/assets/character/akane.jpg";
import AkiImage from "@/assets/character/aki.jpg";
import ArimaImage from "@/assets/character/arima.jpg";
import BocchiImage from "@/assets/character/bocchi.jpg";
import ChikaImage from "@/assets/character/chika.jpg";
import ChizuruImage from "@/assets/character/chizuru.jpg";
import FuminoImage from "@/assets/character/fumino.jpg";
import HayasakaImage from "@/assets/character/hayasaka.jpg";
import HiroiImage from "@/assets/character/hiroi.jpg";
import HoshinoImage from "@/assets/character/hoshino.jpg";
import HotaruImage from "@/assets/character/hotaru.jpg";
import IchikaImage from "@/assets/character/ichika.jpg";
import ItsukiImage from "@/assets/character/itsuki.jpg";
import KaguyaImage from "@/assets/character/kaguya.jpg";
import KitaImage from "@/assets/character/kita.jpg";
import MikuImage from "@/assets/character/miku.jpg";
import NanamiImage from "@/assets/character/nanami.jpg";
import NazunaImage from "@/assets/character/nazuna.jpg";
import NijikaImage from "@/assets/character/nijika.jpg";
import NinoImage from "@/assets/character/nino.jpg";
import RengeImage from "@/assets/character/renge.jpg";
import RinImage from "@/assets/character/rin.jpg";
import RubyImage from "@/assets/character/ruby.jpg";
import RukaImage from "@/assets/character/ruka.jpg";
import RyoImage from "@/assets/character/ryo.jpg";
import ShiroganeImage from "@/assets/character/shirogane.jpg";
import SumiImage from "@/assets/character/sumi.jpg";
import YotsubaImage from "@/assets/character/yotsuba.jpg";
import YuigahamaImage from "@/assets/character/yuigahama.jpg";
import YukinoshitaImage from "@/assets/character/yukinoshita.jpg";

export const animeCharacter = [
  { name: "Akane", image: AkaneImage },
  { name: "Aki", image: AkiImage },
  { name: "Arima", image: ArimaImage },
  { name: "Bocchi", image: BocchiImage },
  { name: "Chika", image: ChikaImage },
  { name: "Chizuru", image: ChizuruImage },
  { name: "Fumino", image: FuminoImage },
  { name: "Hayasaka", image: HayasakaImage },
  { name: "Hiroi", image: HiroiImage },
  { name: "Hoshino", image: HoshinoImage },
  { name: "Hotaru", image: HotaruImage },
  { name: "Ichika", image: IchikaImage },
  { name: "Itsuki", image: ItsukiImage },
  { name: "Kaguya", image: KaguyaImage },
  { name: "Kita", image: KitaImage },
  { name: "Miku", image: MikuImage },
  { name: "Nanami", image: NanamiImage },
  { name: "Nazuna", image: NazunaImage },
  { name: "Nijika", image: NijikaImage },
  { name: "Nino", image: NinoImage },
  { name: "Renge", image: RengeImage },
  { name: "Rin", image: RinImage },
  { name: "Ruby", image: RubyImage },
  { name: "Ruka", image: RukaImage },
  { name: "Ryo", image: RyoImage },
  { name: "Shirogane", image: ShiroganeImage },
  { name: "Sumi", image: SumiImage },
  { name: "Yotsuba", image: YotsubaImage },
  { name: "Yuigahama", image: YuigahamaImage },
  { name: "Yukinoshita", image: YukinoshitaImage },
].map((character) => ({ ...character, isClicked: false }));
