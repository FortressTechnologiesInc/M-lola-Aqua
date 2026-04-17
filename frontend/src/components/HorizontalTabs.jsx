import React from 'react';

export default function HorizontalTabs({ tabs, active, onChange }) {
  return (
    <div className="horizontal-tabs" role="tablist">
      {tabs.map(t => (
        <div key={t.key} className="tab" role="tab" onClick={() => onChange(t.key)}>
          {t.label}
        </div>
      ))}
    </div>
  );
}
