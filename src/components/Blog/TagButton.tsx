const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <a
      href={href}
      className="mb-3 mr-3 inline-flex items-center justify-center rounded-full border border-yellow-500 bg-yellow-500 px-5 py-2 text-sm font-medium text-white transition duration-300 hover:bg-transparent hover:text-yellow-500 dark:border-yellow-400 dark:bg-yellow-400 dark:hover:bg-transparent dark:hover:text-yellow-400"
    >
      {text}
    </a>
  );
};

export default TagButton;
