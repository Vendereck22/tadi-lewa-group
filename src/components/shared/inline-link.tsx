import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Lien dans un texte (email, téléphone…) : Button shadcn en variante « link »,
// sans hauteur ni marge, qui garde la couleur et la taille du texte autour
export function InlineLink({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <Button
      asChild
      variant="link"
      className={cn(
        "h-auto justify-start p-0 text-[length:inherit] font-[inherit] whitespace-normal text-inherit has-[>svg]:px-0",
        className,
      )}
    >
      <a {...props} />
    </Button>
  );
}
