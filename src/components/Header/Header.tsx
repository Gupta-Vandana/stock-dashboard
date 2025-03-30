export interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <div
      style={{
        backgroundColor: '#1976d2',
        color: '#FFFFFF',
        padding: '1rem',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        margin: '1rem auto',
        width: '80%',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{title}</div>
    </div>
  );
};
