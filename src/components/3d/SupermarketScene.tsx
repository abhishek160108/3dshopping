import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { DEPARTMENTS, PRODUCTS } from '../../data/products';
import { useStore } from '../../store/useStore';

export const SupermarketScene: React.FC = () => {
  const setSelectedProduct = useStore((s) => s.setSelectedProduct);
  const setHoveredProduct = useStore((s) => s.setHoveredProduct);

  const shelfPlacements = useMemo(() => {
    return DEPARTMENTS.map((dept) => {
      const lengthZ = Math.abs(dept.zEnd - dept.zStart);
      const midZ = (dept.zStart + dept.zEnd) / 2;
      const items = PRODUCTS.filter((p) => p.category === dept.id);
      return { dept, lengthZ, midZ, items };
    });
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <Canvas shadows camera={{ position: [0, 1.7, 13.5], fov: 60 }}>
        <color attach="background" args={['#061710']} />
        <fogExp2 attach="fog" args={['#061710', 0.018]} />
        <ambientLight intensity={0.65} color="#D1FAE5" />
        <directionalLight
          castShadow
          position={[10, 18, 12]}
          intensity={0.95}
          color="#FFFBEB"
        />

        {/* Terrazzo Supermarket Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -6]} receiveShadow>
          <planeGeometry args={[44, 48]} />
          <meshStandardMaterial color="#0D261C" roughness={0.28} metalness={0.15} />
        </mesh>

        {/* 8 Department Gondola Shelves & Stocked Products */}
        {shelfPlacements.map(({ dept, lengthZ, midZ, items }) => (
          <group key={dept.id} position={[dept.shelfRowX, 0, midZ]}>
            <mesh position={[0, 1.4, 0]} castShadow receiveShadow>
              <boxGeometry args={[1.65, 2.7, lengthZ]} />
              <meshStandardMaterial color="#112E21" roughness={0.45} />
            </mesh>
            {items.map((prod, idx) => {
              const zOff = -lengthZ / 2 + 1.1 + (idx / Math.max(1, items.length - 1)) * (lengthZ - 2.2);
              const tierY = [0.85, 1.45, 2.05][idx % 3];
              return (
                <mesh
                  key={prod.id}
                  position={[dept.shelfRowX < 0 ? 0.65 : -0.65, tierY, zOff]}
                  castShadow
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(prod);
                  }}
                  onPointerOver={(e) => {
                    e.stopPropagation();
                    setHoveredProduct(prod);
                  }}
                  onPointerOut={() => setHoveredProduct(null)}
                >
                  <boxGeometry args={[0.36, 0.42, 0.28]} />
                  <meshStandardMaterial color={prod.primaryColor} roughness={0.3} />
                </mesh>
              );
            })}
          </group>
        ))}
      </Canvas>
    </div>
  );
};
