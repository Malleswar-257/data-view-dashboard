const express = require('express');
const router = express.Router();
const prisma = require('../prisma');
const auth = require('../auth');

router.get('/dashboard', async (req, res) => {
  const dashboard = await prisma.dashboard.findUnique({
    where: { id: req.userId },
    include: { widgets: true },
  });
  res.send(dashboard);
});

router.post('/dashboard/widgets', async (req, res) => {
  const { widgetType, widgetData } = req.body;
  const widget = await prisma.widget.create({
    data: {
      type: widgetType,
      data: widgetData,
      dashboard: { connect: { id: req.userId } },
    },
  });
  res.send({ widgetId: widget.id });
});

router.put('/dashboard/widgets/:widgetId', async (req, res) => {
  const { widgetId } = req.params;
  const { widgetType, widgetData } = req.body;
  await prisma.widget.update({
    where: { id: widgetId },
    data: { type: widgetType, data: widgetData },
  });
  res.send({});
});

router.delete('/dashboard/widgets/:widgetId', async (req, res) => {
  const { widgetId } = req.params;
  await prisma.widget.delete({ where: { id: widgetId } });
  res.send({});
});

router.get('/data/:reportId', async (req, res) => {
  const { reportId } = req.params;
  const report = await prisma.report.findUnique({ where: { id: reportId } });
  res.send({ data: report.data });
});

module.exports = router;