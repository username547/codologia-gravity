const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.Physics,
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Plugins.Keyboard,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Physics.Acts.CreateRevoluteJoint,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Physics.Acts.ApplyTorque,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Cnds.AngleWithin,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{Физика: 0},
	{Фон: 0},
	{СледитьЗа: 0},
	{ОграничитьСценой: 0},
	{Байкер: 0},
	{ЗаднееКолесо: 0},
	{ПереднееКолесо: 0},
	{Клавиатура: 0}
];

self.InstanceType = {
	Фон: class extends self.ITiledBackgroundInstance {},
	Байкер: class extends self.ISpriteInstance {},
	ЗаднееКолесо: class extends self.ISpriteInstance {},
	ПереднееКолесо: class extends self.ISpriteInstance {},
	Клавиатура: class extends self.IInstance {}
}