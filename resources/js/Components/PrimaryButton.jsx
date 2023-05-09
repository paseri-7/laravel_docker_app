export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `w-40 h-8 border border-blue-500 bg-blue-500 text-white rounded-md ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
