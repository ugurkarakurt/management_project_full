export const applyDeviceStyles = ($device: 'xl' | 'lg' | 'md' | 'sm' | 'xs' | undefined, styles: object) => {
  if (!$device) return {};
  const smallerDevices = ['md', 'sm', 'xs'];
  return smallerDevices.includes($device) ? styles : {};
};