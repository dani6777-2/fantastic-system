export function SiteFooter() {
  return (
    <footer className="bg-secondary py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Cloud Comparator. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

