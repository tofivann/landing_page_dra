import { Box, Image, Text, Overlay } from "@mantine/core";
import { useState } from "react";

interface ServiceCardProps {
    src: string;
    title: string;
    }

    export function ImageCard({ src, title }: ServiceCardProps) {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "12px",
            cursor: "pointer",
            height: "350px",
        }}
        >
        <Image
            src={src}
            alt={title}
            h="100%"
            w="100%"
            style={{
            transition: "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)",
            transform: hovered ? "scale(1.15)" : "scale(1)",
            objectFit: "cover",
            }}
        />

        <Overlay
            gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 60%)"
            opacity={hovered ? 1 : 0}
            zIndex={1}
            display="flex"
            style={{
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "20px",
            }}
        >
            <Text
            c="white"
            fw={700}
            size="xl"
            style={{
                transform: hovered ? "translateY(0)" : "translateY(15px)",
                transition: "transform 400ms ease",
                textShadow: "0 2px 4px rgba(0,0,0,0.5)",
            }}
            >
            {title}
            </Text>
        </Overlay>
        </Box>
    );
}
