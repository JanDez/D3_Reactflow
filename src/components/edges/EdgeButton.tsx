import { EdgeProps, getBezierPath } from 'reactflow';
import { SEdgeBtn, SPath } from '../../styledComponents/Edges.styles';

const foreignObjectSize = 40;

const EdgeButton = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
  data
}: EdgeProps) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

    return (
        <>
            <SPath
                id={id}
                className="react-flow__edge-path"
                d={edgePath}
                markerEnd={markerEnd} />
            <foreignObject
                width={foreignObjectSize}
                height={foreignObjectSize}
                x={labelX - foreignObjectSize / 2}
                y={labelY - foreignObjectSize / 2}
                className="edgebutton-foreignobject"
                requiredExtensions="http://www.w3.org/1999/xhtml">
                    <SEdgeBtn onClick={() => data.handleDeleteEdge(id)}>
                        x
                    </SEdgeBtn>
            </foreignObject>
        </>
    );
}

export default EdgeButton