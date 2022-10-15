import React, { useRef, useEffect, useState, useMemo } from "react";
import DG from "2gis-maps";

const x = 55.806044;
const y = 37.395464;
const zoom = 17;

const Map = () => {
  const elRef = useRef();
  const [map, setMap] = useState(null);

  const options = useMemo(
    () => ({
      center: [x, y],
      zoom,
    }),
    [x, y, zoom]
  );

  useEffect(() => {
    let innerMap = map;
    if (!innerMap) {
      innerMap = DG.map(elRef.current, options);
      setMap(innerMap);
    } else {
      innerMap.setView(options.center, options.zoom);
    }

    const handleClick = (e) => console.log(e);

    innerMap.addEventListener("click", handleClick);

    return () => {
      innerMap.removeEventListener("click", handleClick);
    };
  }, [map, elRef, options]);

  return (
    <div
      ref={elRef}
      style={{
        width: "700px",
        height: "390px",
      }}
    />
  );
};

export default React.memo(Map);
