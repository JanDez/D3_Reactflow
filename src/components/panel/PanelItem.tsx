import { PanelItemData, DiagramNodeType } from "../../core/types";
import {
  SPanelItem,
  SPanelItemInfo,
} from "../../styledComponents/Panel.styles";

import {BiHome} from 'react-icons/bi'
import {FcAbout} from 'react-icons/fc'
import {MdProductionQuantityLimits} from 'react-icons/md'
import {BsShopWindow} from 'react-icons/bs'
import {GrBlog} from 'react-icons/gr'
import {AiOutlineVerticalAlignTop, AiOutlineVerticalAlignBottom, AiOutlineMenu} from 'react-icons/ai'
import {TbContainer, TbArrowAutofitContent} from 'react-icons/tb'

interface PanelItemProps {
  data: PanelItemData;
  nodeType: DiagramNodeType;
  onDragStart: (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: DiagramNodeType
  ) => void;
}

const PanelItem = ({ data, nodeType, onDragStart }: PanelItemProps) => {
  const iconsList = {
    inicio: <BiHome className="icon" />,
    about: <FcAbout className="icon" />,
    product: <MdProductionQuantityLimits className="icon" />,
    shop: <BsShopWindow className="icon" />,
    blog: <GrBlog className="icon blog-icon" />,
    header: <AiOutlineVerticalAlignTop className="icon" />,
    container: <TbContainer className="icon" />,
    content: <TbArrowAutofitContent className="icon" />,
    footer: <AiOutlineVerticalAlignBottom className="icon" />,
    menu: <AiOutlineMenu className="icon" />,
  }

  return (
    <SPanelItem id={data.id}>
      <SPanelItemInfo
        onDragStart={(event) => onDragStart(event, nodeType)}
        draggable>
          {iconsList[data.id as keyof typeof iconsList]}
      </SPanelItemInfo>
    </SPanelItem>
  );
};

export default PanelItem;